// class Home {
//   roomNumber: number;
//   windowNumber: number;
//   floor: number;
//   constructor(room: number, floor: number, window: number) {
//     this.roomNumber = room;
//     this.floor = floor;
//     this.windowNumber = window;
//   }
//   eatMeal() {
//     console.log("you ate your meal at the" + this.roomNumber);
//   }
// }
// let home = new Home(3, 6, 2);
// home.eatMeal();

class Person {
  public username: string;
  constructor(username: string) {
    this.username = username;
  }
  save() {
    console.log("person has been saved. Person Name:" + this.username);
  }
}
class Customer extends Person {
  sell() {
    console.log("Custoer sold something");
  }
}
class Employee extends Person {
  paySalary() {
    console.log("You payed salary to " + this.username);
  }
}

let employee = new Employee("Rasim");
employee.paySalary();
