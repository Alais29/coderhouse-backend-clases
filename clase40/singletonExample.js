class Singleton {
  constructor() {
    this.instance;
  }

  createInstance() {
    if (!this.instance) this.instance = new Date();
    return this.instance;
  }
}

const test = new Singleton();
const test1 = new Singleton();

console.log(test.createInstance());
console.log(test.createInstance());
console.log(test.createInstance());
console.log(test.createInstance());
