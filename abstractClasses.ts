abstract class CreditBase {
  constructor() {}
  save(): void {
    console.log("saved");
  }
  abstract calculate(): void;
}

class UserCredit extends CreditBase {
  constructor() {
    super();
  }
  calculate(): void {
    console.log("tuketici kreditine gore hesablama sistemi");
  }
}
class MortgageCredit extends CreditBase {
  constructor() {
    super();
  }
  calculate(): void {
    console.log("Mortgage kreditine gore hesablama sistemi");
  }
}
let userCredit = new UserCredit();
userCredit.calculate();
userCredit.save();
console.log("this is comment for seperate the two different classes");
let mortgageCredit = new MortgageCredit();
mortgageCredit.calculate();
mortgageCredit.save();
