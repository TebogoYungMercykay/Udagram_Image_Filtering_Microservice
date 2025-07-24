import fs from "fs";
import * as Jimp from "jimp";

/**
 * filterImageFromURL
 * Helper function to download, filter, and save the filtered image locally
 * Returns the absolute path to the local image
 * 
 * @param inputURL - A publicly accessible URL to an image file
 * @returns An absolute path to a filtered image locally saved file
 */
export async function filterImageFromURL(inputURL: string): Promise<string> {
  return new Promise((resolve, reject) => {
    Jimp.read(inputURL)
      .then(photo => {
        const outpath: string = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';
        
        photo
          .resize(256, 256) // resize
          .quality(60) // set JPEG quality
          .greyscale() // set greyscale
          .write(__dirname + outpath, (img) => {
            resolve(__dirname + outpath);
          });
      })
      .catch(err => {
        console.error(err);
        reject("Could not read image.");
      });
  });
}

/**
 * deleteLocalFiles
 * Helper function to delete files on the local disk
 * Useful to cleanup after tasks
 * 
 * @param files - An array of absolute paths to files
 */
export async function deleteLocalFiles(files: Array<string>): Promise<void> {
  for (const file of files) {
    fs.unlinkSync(file);
  }
}
