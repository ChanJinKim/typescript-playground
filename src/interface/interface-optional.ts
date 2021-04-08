/* eslint-disable no-use-before-define */
interface Shape {
  width?: number;
  height?: number;
  radius?: number;
  getArea(): number;
}

class Rect implements Shape {
  width: number;

  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(3.14);
console.log(c.getArea());
/* eslint-enable no-use-before-define */
