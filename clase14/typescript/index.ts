const getRandomNumberTs = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

class ColorTs {
  getColor(): string {
    const red: number = getRandomNumberTs(0, 255);
    const green: number = getRandomNumberTs(0, 255);
    const blue: number = getRandomNumberTs(0, 255);

    return `The color is rgb(${red}, ${green}, ${blue})`;
  }
}

const colorTs = new ColorTs();
console.log(colorTs.getColor());
