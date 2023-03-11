const myArray1: any[] = [1, 2, 3, "H E L L O"];
let myArray2: number[] = [1, 2, 3];
let myArray3: any[] = [];

// * pop
// for (let x = 0; x < myArray1.length; ) {
//   console.log(myArray1.pop());
//   x++;
// }
// * push
// for (let x = 0; x < 5; ) {
//   console.log(myArray3.push(x));
//   console.log(myArray3);
//   x++;
// }

//* Tuple
// let employee: [number, string, boolean] = [1, "A R R A Y", true];
// console.log(employee);

// * Tuple Array
let employee: [number, string, boolean][] = [
  [1, "A R R A Y", true],
  [2, "T E S T ", false],
];
console.log(employee[0]);
