const fs = require('fs');
const https = require('https');
const path = require('path');

// Configuration
const API_URL = 'https://api.federated.directory/swagger.json';
const OUTPUT_DIR = path.join(__dirname, '../docs/public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'swagger.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function fetchSpec(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
      res.on('error', reject);
    });
  });
}

function sanitize(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sanitize);
  }

  const newObj = {};
  for (const key in obj) {
    // Check if the key is $ref and if the value is an absolute URL (which causes the 401/CORS/Proxy errors)
    if (key === '$ref' && typeof obj[key] === 'string' && obj[key].startsWith('http')) {
      console.log(`Sanitizing ref: ${obj[key]}`);
      
      // Instead of pointing to a live URL, point to a safe internal definition or generic schema
      // This stops Scalar from trying to fetch the protected resource
      if (obj[key].includes('/Users/')) {
        newObj[key] = '#/definitions/UserResponse'; 
      } else if (obj[key].includes('/Groups/')) {
        newObj[key] = '#/definitions/GroupResponse';
      } else {
        // Fallback: Remove the ref entirely by skipping it, or replace with a generic object ref if available
        // Skipping it effectively makes it an 'any' type in the docs, which is better than a crash.
        // newObj['type'] = 'string'; // Alternative: treat as string
        continue; 
      }
    } else {
      newObj[key] = sanitize(obj[key]);
    }
  }
  return newObj;
}

async function run() {
  console.log(`Fetching swagger.json from ${API_URL}...`);
  try {
    const spec = await fetchSpec(API_URL);
    console.log('Sanitizing spec to remove external $ref links...');
    const cleanSpec = sanitize(spec);
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(cleanSpec, null, 2));
    console.log(`Success! Saved sanitized spec to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Failed to process swagger.json:', error);
    process.exit(1);
  }
}

run();
