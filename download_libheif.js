const version = 'v1.15.1';
const base = `https://github.com/catdad-experiments/libheif-emscripten/releases/download/${version}`;
const lib = `${base}/libheif.js`;

const org = await (await fetch(lib)).text();
await Deno.writeTextFile("libheif.js", org);
