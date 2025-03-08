require('dotenv').config();
const fs = require('fs-extra');
const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary with environment variables or defaults
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'demo',
  api_key: process.env.CLOUDINARY_API_KEY || '123456789012345',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'abcdefghijklmnopqrstuvwxyz12',
  secure: true
});

// List of media files to upload
const mediaFiles = [
  'hoodie1.jpeg',
  'hoodie2.jpeg',
  'hoodie3.jpeg',
  'hoodie4.jpeg',
  'hoodie5.jpeg',
  'hoodie6.jpeg',
  'hoodie7.jpeg',
  'hoodie8.jpeg',
  'hoodie9.jpeg',
  'hoodie10.jpeg',
  'hoodie11.jpeg',
  'coolx front page video.mp4',
  'shopping-cart.png',
  '3-lines.png',
  'a hoodie with Dharm written in Hindi on a white screen.png',
  'cool merchandise photo.png'
];

// Create a map to store Cloudinary URLs for each file
const mediaMap = {};

// Function to modify script.js with Cloudinary URLs
async function updateScriptFile() {
  const scriptPath = path.join(__dirname, 'script.js');
  let scriptContent = await fs.readFile(scriptPath, 'utf8');
  
  // Update each media reference in the script
  Object.entries(mediaMap).forEach(([localFile, cloudinaryUrl]) => {
    const regex = new RegExp(`['"]${localFile}['"]`, 'g');
    scriptContent = scriptContent.replace(regex, `'${cloudinaryUrl}'`);
  });
  
  await fs.writeFile(scriptPath, scriptContent, 'utf8');
  console.log('Updated script.js with Cloudinary URLs');
}

// Function to modify HTML files with Cloudinary URLs
async function updateHtmlFiles() {
  const htmlFiles = ['index.html', 'hoodie-detail.html', 'cart.html'];
  
  for (const htmlFile of htmlFiles) {
    const filePath = path.join(__dirname, htmlFile);
    
    if (await fs.pathExists(filePath)) {
      let htmlContent = await fs.readFile(filePath, 'utf8');
      
      // Update each media reference in the HTML
      Object.entries(mediaMap).forEach(([localFile, cloudinaryUrl]) => {
        const regex = new RegExp(`(src=["'])${localFile}(["'])`, 'g');
        htmlContent = htmlContent.replace(regex, `$1${cloudinaryUrl}$2`);
      });
      
      await fs.writeFile(filePath, htmlContent, 'utf8');
      console.log(`Updated ${htmlFile} with Cloudinary URLs`);
    }
  }
}

// Function to check if a media file exists and if not, create a placeholder
async function ensureMediaFile(file) {
  const filePath = path.join(__dirname, file);
  try {
    // Check if file exists
    await fs.access(filePath);
    return filePath;
  } catch (error) {
    // If file doesn't exist, use a default placeholder based on file extension
    const ext = path.extname(file).toLowerCase();
    let placeholderUrl;
    
    if (ext === '.mp4') {
      placeholderUrl = 'https://res.cloudinary.com/demo/video/upload/v1613748829/samples/sea-turtle.mp4';
    } else if (ext === '.png' || ext === '.jpeg' || ext === '.jpg') {
      // Use the existing hoodie1.jpeg as placeholder if it exists
      try {
        await fs.access(path.join(__dirname, 'hoodie1.jpeg'));
        return path.join(__dirname, 'hoodie1.jpeg');
      } catch {
        placeholderUrl = 'https://res.cloudinary.com/demo/image/upload/v1579702300/samples/ecommerce/accessories-bag.jpg';
      }
    }
    
    if (placeholderUrl) {
      console.log(`File ${file} not found. Using placeholder.`);
      mediaMap[file] = placeholderUrl;
      return null;
    }
  }
}

// Main build function
async function build() {
  console.log('Starting build process...');
  
  // Check for existing media files and upload to Cloudinary
  for (const file of mediaFiles) {
    const filePath = await ensureMediaFile(file);
    if (filePath) {
      try {
        console.log(`Uploading ${file} to Cloudinary...`);
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'hood_up',
          resource_type: 'auto'
        });
        
        // Store the Cloudinary URL
        mediaMap[file] = result.secure_url;
        console.log(`Uploaded ${file} to ${result.secure_url}`);
      } catch (error) {
        console.error(`Error uploading ${file}:`, error.message);
        // If upload fails, use a placeholder URL
        if (file.includes('.mp4')) {
          mediaMap[file] = 'https://res.cloudinary.com/demo/video/upload/v1613748829/samples/sea-turtle.mp4';
        } else {
          mediaMap[file] = 'https://res.cloudinary.com/demo/image/upload/v1579702300/samples/ecommerce/accessories-bag.jpg';
        }
      }
    }
  }
  
  // Update references in files
  await updateScriptFile();
  await updateHtmlFiles();
  
  // Create a URL mapping file for reference
  await fs.writeFile('media-map.json', JSON.stringify(mediaMap, null, 2), 'utf8');
  console.log('Build process completed!');
}

// Run the build process
build().catch(err => {
  console.error('Build process failed:', err);
  process.exit(1);
}); 