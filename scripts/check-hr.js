
const fs = require('fs');
const path = require('path');

function walk(dir, results = []) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === 'node_modules' || file === 'dist' || file === '.vitepress') return;
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) walk(filepath, results);
        else if (file.endsWith('.md')) results.push(filepath);
    });
    return results;
}

const files = walk('docs');

files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    let body = content;
    // Strip FM
    if (content.startsWith('---\n')) {
        const end = content.indexOf('\n---\n');
        if (end !== -1) body = content.substring(end + 5);
    }
    
    const trimmed = body.trim();
    const lines = trimmed.split('\n');
    
    if (lines.length > 0) {
        if (lines[0].trim().match(/^---/)) console.log(`START: ${f}`);
        if (lines[lines.length-1].trim().match(/^---/)) console.log(`END: ${f}`);
    }
});
