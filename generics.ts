function value(x: number): number {
  return x;
}

let num = value(10);
let cities = ["Baki", "Gence", "Yardimli", "Sumqayit"];

console.log(num, "deyerimiz");

function value2<T>(x: T): T {
  return x;
}

let num2 = value2<number>(10);
let string2 = value2<string>("Ramazan");
let boolean2 = value2<boolean>(false);
console.log(
  `number deyerim beaberdir ${num2}, string deyerim ise beraberdir ${string2}, boolean deyerimiz de ${boolean2}`
);

class GenericClasses<T> {
  degisken: T;
  func(param: T): T {
    return param;
  }
}

let cls = new GenericClasses<number>();
console.log(cls.func(3));
