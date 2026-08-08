const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /#F5F1EA/gi, to: '#FFFFFF' }, // Background
  { from: /#E8E3DB/gi, to: '#F8FAFC' }, // Surface (Slate 50)
  { from: /#D9D3C7/gi, to: '#E2E8F0' }, // Border (Slate 200)
  { from: /#2B211A/gi, to: '#0F172A' }, // Primary text (Slate 900)
  { from: /#55423d/gi, to: '#475569' }, // Secondary text (Slate 600)
  { from: /#B5573B/gi, to: '#2563EB' }, // Accent (Blue 600)
  { from: /#963f26/gi, to: '#1D4ED8' }, // Accent hover (Blue 700)
  
  { from: /#625e52/gi, to: '#64748B' }, // Slate 500
  { from: /#65584f/gi, to: '#64748B' }, // Slate 500
  { from: /#676256/gi, to: '#64748B' }, // Slate 500
  { from: /#89726c/gi, to: '#94A3B8' }, // Slate 400
  
  { from: /#f7f3ec/gi, to: '#F1F5F9' }, // Slate 100
  { from: /#E6DFD0/gi, to: '#F1F5F9' }  // Slate 100
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
