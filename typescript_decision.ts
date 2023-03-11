let x: number = 10,
  y = 20;
// * if else
if (y > x) {
  console.log(`${y} มากว่า ${x}`);
} else {
  console.log(`${x} น้อยกว่า ${y}`);
}
// * else if ternary
x < y ? console.log(`${y} มากว่า ${x}`) : console.log(`${x} น้อยกว่า ${y}`);
