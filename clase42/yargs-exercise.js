const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const args = yargs(hideBin(process.argv)).argv;

console.log(args);

const operacion = (argsObj) => {
  const objMap = {
    "+": Number(argsObj.n1) + Number(argsObj.n2),
    "-": Number(argsObj.n1) - Number(argsObj.n2),
    "*": Number(argsObj.n1) * Number(argsObj.n2),
    "/": Number(argsObj.n1) / Number(argsObj.n2),
  };

  return objMap[argsObj.op];
};

console.log(operacion(args));
