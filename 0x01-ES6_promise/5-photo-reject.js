import { uploadPhoto as utilsUploadPhoto, createUser } from './utils.js';

export default function uploadPhotoWithError(filename) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
