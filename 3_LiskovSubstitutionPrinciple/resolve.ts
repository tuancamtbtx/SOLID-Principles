interface Shape {
    getArea(): number;
  }
  
  class RectangleGood implements Shape {
    constructor(public width: number, public height: number) {}
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  class SquareGood implements Shape {
    constructor(public size: number) {}
  
    getArea() {
      return this.size * this.size;
    }
  }
  