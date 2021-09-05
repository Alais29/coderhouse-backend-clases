const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

class Color {  
  getColor() {
    const red = getRandomNumber(0, 255)
    const green = getRandomNumber(0, 255)
    const blue = getRandomNumber(0, 255)

    return `the color is rgb(${red}, ${green}, ${blue})`
  }
}

const color = new Color()
console.log(color.getColor())