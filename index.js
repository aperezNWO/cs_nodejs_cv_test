//const Jimp = require('jimp');
const sharp = require('sharp');

const outputImagePath = '.img/output.jpg';  // Output image

// Define a global variable 'Module' with a method 'onRuntimeInitialized':
  async function onRuntimeInitialized() {

    

    try {
/*
      // load local image file with jimp. It supports jpg, png, bmp, tiff and gif:
      var jimpSrc = await Jimp.read('./img/square.jpg');
  
      // `jimpImage.bitmap` property has the decoded ImageData that we can use to create a cv:Mat
      var src = cv.matFromImageData(jimpSrc.bitmap);
    
      // following lines is copy&paste of opencv.js dilate tutorial:
      let dst = new cv.Mat();
      let M = cv.Mat.ones(5, 5, cv.CV_8U);
      let anchor = new cv.Point(-1, -1);
      cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    
      // Now that we are finish, we want to write `dst` to file `output.png`. For this we create a `Jimp`
      // image which accepts the image data as a [`Buffer`](https://nodejs.org/docs/latest-v10.x/api/buffer.html).
      // `write('output.png')` will write it to disk and Jimp infers the output format from given file name:
      new Jimp({
        width: dst.cols,
        height: dst.rows,
        data: Buffer.from(dst.data)
      })
      .write('./img/output.png');
    
      src.delete();
      dst.delete();
      */
      sharp('./img/square.jpg')
      .resize(256, 256)
      .toFile('./img/output.jpg', (err, info) => {
        if (err) {
          console.error('Error processing image:', err);
        } else {
          console.log('Image processed:', info);
        }
      })
      .toBuffer()
      .then((data) => {
        /*  
        const mat = cv.imread(data);  // Convert the image to a matrix

        const gray = new cv.Mat();
        cv.cvtColor(mat, gray, cv.COLOR_RGBA2GRAY, 0); // Convert image to grayscale

        const faces = new cv.RectVector();
        const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);  // Use OpenCV's built-in face detector

        // Detect faces in the image
        classifier.detectMultiScale(gray, faces, 1.1, 3, 0);

        // Draw rectangles around faces
        for (let i = 0; i < faces.size(); i++) {
          const face = faces.get(i);
          cv.rectangle(mat, face, [255, 0, 0, 255], 2);
        }

        cv.imshow('outputCanvas', mat);  // Display the processed image in a canvas element
        mat.delete();  // Clean up
        gray.delete();
        faces.delete();
        classifier.delete();
    
        console.log('Image processed and saved at', outputImagePath);
      })
      .catch((err) => {
        console.error('Error processing the image:', err);*/
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