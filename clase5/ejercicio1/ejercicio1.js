const getRandNumber = () => Math.floor(Math.random() * (20 - 1 + 1)) + 1;

const numberObj = {}

for (let i = 0; i < 10000; i++) {
  let randNum = getRandNumber()
  numberObj[randNum] ? numberObj[randNum] += 1 : numberObj[randNum] = 1;
}

console.log(numberObj)