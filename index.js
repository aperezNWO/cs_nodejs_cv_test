//const Jimp = require('jimp');
const sharp       = require('sharp');
const { JSDOM }   = require('jsdom');
const dom         = new JSDOM('<html><body></body></html>');
const window      = dom.window;
const document    = window.document;

const outputImagePath = '.img/output.jpg';  // Output image

// Define a global variable 'Module' with a method 'onRuntimeInitialized':
  async function onRuntimeInitialized() {
    //
    try {
      sharp('./img/square.jpg')
      /*
      .resize(256, 256)
      .toFile('./img/output.jpg', (err, info) => {
        if (err) {
          console.error('Error processing image:', err);
        } else {
          console.log('Image processed:', info);
        }
      })*/
      .toBuffer()
      .then((data) => {
        //
        console.log('Image processing...');
      })
      .catch((err) => {
        console.error('Error processing the image:');
      });
  
    } catch (error) {
      console.error('Error reading or processing image:', error);
    }
  }

// Finally, load the open.js as before. The function `onRuntimeInitialized` contains our program.
Module = {
  onRuntimeInitialized
};

// Load 'opencv.js' assigning the value to the global variable 'cv'
cv = require('./opencv.js')