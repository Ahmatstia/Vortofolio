const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /rgba\(43,\s*33,\s*26/g, to: 'rgba(15, 23, 42' },
  { from: /rgba\(181,\s*87,\s*59/g, to: 'rgba(37, 99, 235' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      for (const { from, to } of replacements) {
        content = content.replace(from, to);
      }
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
