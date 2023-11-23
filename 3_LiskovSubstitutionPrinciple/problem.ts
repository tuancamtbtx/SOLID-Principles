class Rectangle {
  constructor(public width: number, public height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(public size: number) {
    super(size, size);
  }

  getArea() {
    return this.size * this.size;
  }
}