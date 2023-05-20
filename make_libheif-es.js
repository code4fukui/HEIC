const src = await Deno.readTextFile("libheif.js");
const s = src.replace(
  `Object.defineProperty(this,"stack",{value:(new Error).stack})`,
  `this.stack={value:(new Error).stack}`
);
const n = s.lastIndexOf("call(this)");
const s2 = s.substring(0, n) + "call(globalThis)";
const dst = s2 + `\nexport default libheif;\n`;
await Deno.writeTextFile("libheif-es.js", dst);
