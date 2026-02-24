class Human {
  constructor(username, userGender) {
    console.log("inside constructor of HUman class");
    ((this.name = username), (this.gender = userGender));
  }
  eat = function () {
    console.log("Eating...");
  };
  sleep = function () {
    console.log("sleeping...");
  };
}

class Teacher extends Human {
  constructor(name, gender, subject) {
    super(name,gender);
    this.subject = subject;
  }

  teach = function () {
    console.log(this.name + " teaches " + this.subject);
  };
}

const t1 = new Teacher("ravi sir","male","c++");


// Constructor Function (Pre-ES6)
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

// Adding methods to prototype
Person.prototype.eat = function() {
    return `Eating...`;
};
// Adding methods to prototype
Person.prototype.sleep = function() {
    return `sleeping...`;
};



const john = new Person('John', 30);


// Prototype Chain Example
const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

const rabbit = {
    jumps: true,
    __proto__: animal  // Sets prototype (old syntax)
};

// Modern way to set prototype
// Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats);  // true (inherited)
console.log(rabbit.jumps); // true (own property)
