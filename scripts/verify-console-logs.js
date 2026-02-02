const { chromium } = require('playwright');
const { spawn } = require('child_process');

async function run() {
  console.log('Starting preview server...');
  const server = spawn('npm', ['run', 'docs:preview'], { stdio: ['ignore', 'pipe', 'inherit'] });

  let browser;
  let serverOutput = '';

  try {
    // Wait for server to start
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Server start timeout')), 30000);
      
      server.stdout.on('data', (data) => {
        const str = data.toString();
        serverOutput += str;
        console.log(str.trim()); // Relay output so we can see it
        if (str.includes('Built site served at')) {
          clearTimeout(timeout);
          resolve();
        }
      });
    });

    console.log('Server started. Launching browser...');
    browser = await chromium.launch();
    const page = await browser.newPage();

    const consoleMessages = [];
    const errors = [];

    page.on('console', async msg => {
      const type = msg.type();
      let text = msg.text();
      
      // Try to get JSON args for better inspection of objects
      try {
        const args = await Promise.all(msg.args().map(arg => arg.jsonValue()));
        if (args.length > 0) {
           text = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
        }
      } catch (e) {
        // ignore failure to parse args
      }

      consoleMessages.push({ type, text });
      
      if (type === 'error' || type === 'warning') {
        console.log(`[BROWSER ${type.toUpperCase()}] ${text}`);
      }
    });

    page.on('pageerror', err => {
      console.error('[BROWSER EXCEPTION]', err);
      errors.push(err);
    });

    // Navigate to the API Reference page (where the consolidated docs are)
    const url = 'http://localhost:4173/developer/api-reference';
    console.log(`Navigating to ${url}...`);
    await page.goto(url);

    // Monitor network requests to detect multiple downloads
    let downloadCount = 0;
    page.on('request', req => {
      if (req.url().endsWith('swagger.json') || req.url().endsWith('.json')) {
        console.log(`[NETWORK] Request to ${req.url()}`);
        downloadCount++;
      }
    });

    // Wait for Scalar component to load (it renders asynchronously)
    console.log('Waiting for Scalar component to render...');
    try {
      // Scalar renders a specific structure. .scalar-app is usually the root.
      await page.waitForSelector('.scalar-app', { timeout: 10000 });
      console.log('Scalar component detected.');
      
      // Find and click the Download button
      console.log('Attempting to find Download button info...');
      const btnInfo = await page.evaluate(() => {
        // Look for our custom button
        const customBtn = document.querySelector('.vp-button-download');
        if (customBtn) {
           return {
             type: 'CUSTOM',
             text: customBtn.textContent,
             href: customBtn.getAttribute('href'),
             download: customBtn.getAttribute('download')
           };
        }
        
        // Fallback: Look for default (should be hidden)
        const links = Array.from(document.querySelectorAll('a, button'));
        const downloadBtn = links.find(el => el.textContent.includes('Download') || el.textContent.includes('Spec'));
        if (downloadBtn) {
           // Check if visible
           const style = window.getComputedStyle(downloadBtn);
           const isVisible = style.display !== 'none' && style.visibility !== 'hidden';
           return {
             type: 'DEFAULT',
             visible: isVisible,
             text: downloadBtn.textContent
           };
        }
        return 'Not found';
      });
      console.log('Download Button Info:', JSON.stringify(btnInfo, null, 2));

    } catch (e) {
      console.error('Scalar component NOT found or timed out!');
      errors.push(new Error('Scalar component failed to render'));
    }

    // Wait a bit more for any delayed errors
    await page.waitForTimeout(5000);

    // Analysis
    console.log('--- Analysis ---');
    
    // Check for specific known errors
    const criticalErrors = consoleMessages.filter(m => 
      m.type === 'error' || 
      (m.type === 'warning' && (
        m.text.includes('Scalar OpenAPI Parser Warning') || 
        m.text.includes('Failed to decode downloaded font') ||
        m.text.includes('Converting circular structure to JSON')
      ))
    );

    if (criticalErrors.length > 0 || errors.length > 0) {
      console.error('❌ Validation FAILED: Critical errors found in console.');
      process.exit(1);
    } else {
      console.log('✅ Validation PASSED: No critical console errors found.');
    }

  } catch (err) {
    console.error('Script failed:', err);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
    if (server) server.kill();
  }
}

run();
