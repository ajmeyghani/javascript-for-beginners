/*
 * In this example we are going to define some functionalities:
 * Developer: code
 * Designer: draw
 * Person: walk
 * Employee: work
 * And make a superPerson who can do all these things
 */

/*
 * Define SuperPerson Type.
 */
function SuperPerson(name) {
  if(!(this instanceof SuperPerson)) {
    return new SuperPerson(name);
  }
  this.name = name;
}

/*
 * define actions/functionalities
 * Each function groups the functionalities
 * based on some common theme.
 */

function personFns() {
  this.walk = function() {
    return 'walking...';
  };
  this.getName = function () {
    return this.name;
  };
}

function designerFns() {
  this.draw = function() {
    return 'drawing...';
  };
}

function developerFns() {
  this.code = function() {
    return 'coding...';
  };
}

function employeeFns() {
  this.work = function () {
    return 'working....';
  };
}

/* apply the functionalities to SuperPerson's prototype */

[personFns, designerFns, developerFns, employeeFns].forEach(fn => {
  fn.call(SuperPerson.prototype);
});

/* now SuperPerson can do all those things */

const person = SuperPerson('Tom');
console.log(person.getName());
console.log(person.walk());
console.log(person.work());
console.log(person.draw());
console.log(person.code());
