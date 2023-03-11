function loadData(name: any = "ไม่ได้ระบุบ"): string {
  return name;
}

function sum(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((a, b) => a + b, 0);
}

function add({ x, y }: { x: number; y: number }) {
  return x + y;
}
console.log(loadData());
console.log(sum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(add({ y: 100, x: 100 }));
