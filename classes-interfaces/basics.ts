// class User {
//   readonly hobbies: string[] = [];

//   constructor(public name: string, private age: number) {}

//   greet() {
//     console.log("My age " + this.age);
//   }
// }

// const john = new User("John", 18);

// john.hobbies.push("Football");

// console.log(john);

class User {
  protected _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";

  static greet() {
    console.log("Hello");
  }
}

console.log(User.eid);
User.greet();

const john = new User();
john.firstName = "John";
john.lastName = "";

console.log(john.fullName);

class Employee extends User {
  constructor(public jobTitle: string) {
    super();
  }

  work() {
    console.log(this._firstName);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {}
}

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}
