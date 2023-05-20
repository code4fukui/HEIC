import libheif from "./libheif-es.js";

const decodeImage = async (image) => {
  const width = image.get_width();
  const height = image.get_height();
  const data = await new Promise((resolve, reject) => {
    image.display({ data: new Uint8ClampedArray(width * height * 4), width, height }, (displayData) => {
      if (!displayData) {
        return reject(new Error('HEIF processing error'));
      }
      resolve(displayData.data);
    });
  });
  return { width, height, data };
};

const decode = async (data) => { // { data, width, height }
  const decoder = new libheif.HeifDecoder();
  const img = decoder.decode(data);
  const img2 = await decodeImage(img[0]);
  return img2;
};

export const HEIC = {
  decode,
};
