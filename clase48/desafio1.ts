const args = Deno.args;
const numbers = args.map((value) => parseInt(value));

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);
const meanValue =
  numbers.reduce((acc, value) => (acc += value)) / numbers.length;

let textos: string[] = [];
textos.push("******************************************");
textos.push(`Números: ${numbers}`);
textos.push(`Mínimo: ${minValue}`);
textos.push(`Máximo: ${maxValue}`);
textos.push(`Promedio: ${meanValue}`);
textos.push("******************************************");

import {
  red,
  green,
  yellow,
  bgWhite,
} from "https://deno.land/std@0.99.0/fmt/colors.ts";
console.log(textos[0]);
console.log(textos[1]);
console.log(bgWhite(yellow(textos[2])));
console.log(bgWhite(red(textos[3])));
console.log(bgWhite(green(textos[4])));
console.log(textos[5]);

const file = await Deno.open("./resultados.dat", { write: true, create: true });
const contentBytes = new TextEncoder().encode(textos.join("\n"));
await Deno.writeAll(file, contentBytes);
file.close();
