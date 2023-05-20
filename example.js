import { HEIC } from "./HEIC.js";
import { UPNG } from "https://taisukef.github.io/UPNG-es/UPNG.js";

const input = new Uint8Array(await Deno.readFile("test.HEIC"));
const img = await HEIC.decode(input);

const png = UPNG.encode([img.data], img.width, img.height, 0);
await Deno.writeFile("test.png", png);

// NG... why?
//import { JPEG } from "https://taisukef.github.io/jpeg-js-es/JPEG.js";
//const jpg = JPEG.encode(img, .9).data;
//await Deno.writeFile("test.jpg", jpg);

