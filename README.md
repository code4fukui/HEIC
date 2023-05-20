# HEIC

HEIC decoder in JavaScript ES module

## usage

## web

```js
import { HEIC } from "https://code4fukui.github.io/HEIC/HEIC.js";

const buf = new Uint8Array(await (await fetch("test.HEIC")).arrayBuffer());
const img = await HEIC.decode(buf);
console.log(img);

const canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
const ctx = canvas.getContext("2d");
const imgd = ctx.createImageData(img.width, img.height);
for (let i = 0; i < imgd.data.length; i++) {
  imgd.data[i] = img.data[i];
}
ctx.putImageData(imgd, 0, 0);
document.body.appendChild(canvas);
```

## Deno

```js
import { HEIC } from "https://code4fukui.github.io/HEIC/HEIC.js";
import { UPNG } from "https://taisukef.github.io/UPNG-es/UPNG.js";

const input = new Uint8Array(await Deno.readFile("test.HEIC"));
const img = await HEIC.decode(input);

const png = UPNG.encode([img.data], img.width, img.height, 0);
await Deno.writeFile("test.png", png);
```

## how to build

```sh
deno run -A download_libheif.js
deno run -A make_libheif-es.js
```

## dependencies

- [libheic](https://github.com/strukturag/libheif)

