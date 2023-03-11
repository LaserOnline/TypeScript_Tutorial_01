// class Point {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//     // console.log(`${this.y} ${this.x}`);
//   }
//   readonly version: string = "1.0.0.1";
//   x: number;
//   y: number;
// }

// class OverLoad {
//   constructor(x: number, y: string);
//   constructor(s: string);
//   constructor(xs: any, y?: any) {}
// }

// class Point1 {
//   _x: number = 0;
//   get x(): number {
//     return this._x + 1;
//   }
//   set x(value: number) {
//     this._x = value;
//   }
// }

// const p = new Point1();
// console.log(p._x);
// console.log(p.x);
// const point = new Point();
// console.log(`${point.x} ${point.y}`);

class Person {
  constructor(name: string) {
    this.name = name;
  }
  call() {
    console.log(`Hi ${this.name}`);
  }
  name: string = "";
}

class Employee extends Person {
  salary: number = 0;
  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }
  call() {
    super.call();
    console.log(`Salary: ${this.salary}`);
  }
}

const p = new Employee("LaserOnline", 85000);
p.call();
