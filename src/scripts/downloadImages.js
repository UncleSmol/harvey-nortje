/**
 * This script helps download the necessary image files for the Harvey Nortje website.
 * Run this script with Node.js to automatically download the hero image.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '../assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Download hero image
const heroImageUrl = 'https://harveynortje.co.za/images/slider/slide1-accessible.jpg';
const heroImagePath = path.join(assetsDir, 'slide1-accessible.jpg');

console.log('Downloading hero image...');
https.get(heroImageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode}`);
    return;
  }

  const fileStream = fs.createWriteStream(heroImagePath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log(`✅ Hero image downloaded successfully to: ${heroImagePath}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading image: ${err.message}`);
});

console.log('If the download fails, you can manually download the image from:');
console.log(heroImageUrl);
console.log('And save it to:');
console.log(heroImagePath);