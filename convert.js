// convert.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory containing .cr2 files
const inputDir = path.join(
    '', 'public', 'images', 'cr2');
// Directory to save .jpg files
const outputDir = path.join(
    '', 'public', 'images', 'jpg');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert .cr2 to .jpg
const convertImages = async () => {
  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      if (path.extname(file).toLowerCase() === '.cr2') {
        const inputFile = path.join(inputDir, file);
        const outputFile = path.join(outputDir, path.basename(file, '.cr2') + '.jpg');

        sharp(inputFile)
          .toFormat('jpeg')
          .toFile(outputFile, (err, info) => {
            if (err) {
              console.error('Error converting file:', err);
            } else {
              console.log('Converted:', file, 'to', outputFile);
            }
          });
      }
    });
  });
};

convertImages();
