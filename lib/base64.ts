import Resizer from 'react-image-file-resizer'

export const convertBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
          resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
          reject(error);
      };
  });
};

export const resizeFile = (file: Blob) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 300, 300, 'JPEG', 95, 0,
    uri => {
      resolve(uri);
    }, 'base64' );
});