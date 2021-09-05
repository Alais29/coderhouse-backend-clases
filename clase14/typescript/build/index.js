"use strict";
const getRandomNumberTs = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
class ColorTs {
    getColor() {
        const red = getRandomNumberTs(0, 255);
        const green = getRandomNumberTs(0, 255);
        const blue = getRandomNumberTs(0, 255);
        return `The color is rgb(${red}, ${green}, ${blue})`;
    }
}
const colorTs = new ColorTs();
console.log(colorTs.getColor());
