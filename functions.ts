function sum(x, y) {
  return x + y;
}

function sum2(x: number, y: number): number {
  return x + y;
}
console.log("first");
sum(4, 5);
sum2(6, 7);

let sum3 = function (x: number, y: number): number {
  return x + y;
};

function invite(firstInvitation: string, ...others: string[]): string {
  return firstInvitation + " " + others.join(" ");
}
console.log(
  invite("azad", "rasim", "fidan", "qulam", "qafar", "firuz", "hesen", "derya")
);
