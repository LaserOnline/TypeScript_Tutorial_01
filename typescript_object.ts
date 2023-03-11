class User {
  name: string = "";
  age: number = 0;
  job: string = "";

  Show() {
    return "Name: " + this.name + " age: " + this.age + " job:" + this.job;
  }
}

const x: any = new User();
x.name = "LaserOnline";
x.age = 20;
x.job = "Developer";

console.log(x.Show());
