const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      // We want to swap #FFFFFF and #F8FAFC
      // Step 1: Replace #FFFFFF with a temporary placeholder
      content = content.replace(/#FFFFFF/gi, '__TEMP_BG__');
      
      // Step 2: Replace #F8FAFC with #FFFFFF (Cards become white)
      content = content.replace(/#F8FAFC/gi, '#FFFFFF');
      
      // Step 3: Replace placeholder with #F8FAFC (Background becomes slate-50)
      content = content.replace(/__TEMP_BG__/g, '#F8FAFC');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
