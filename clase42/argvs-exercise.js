const minimist = require("minimist");

const args = minimist(process.argv.slice(2), {
  alias: {
    op: "operador",
    n1: "numero 1",
    n2: "numero 2",
  },
});

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
