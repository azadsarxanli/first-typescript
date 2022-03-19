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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(username) {
        this.username = username;
    }
    Person.prototype.save = function () {
        console.log("person has been saved. Person Name:" + this.username);
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("Custoer sold something");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.paySalary = function () {
        console.log("You payed salary to " + this.username);
    };
    return Employee;
}(Person));
var employee = new Employee("Rasim");
employee.paySalary();
