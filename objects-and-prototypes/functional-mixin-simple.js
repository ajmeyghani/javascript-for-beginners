/*
 * Define functionalities
 * Grouped by `fns` here.
 */
function fns() {
  this.hello = function() {
    return `Hello ${this.name}`;
  };
  this.bye = function() {
    return `Bye ${this.name}`;
  };
  this.getName = function() {
    return this.name;
  };
}

/* Define Type */
function Person(name) {
  if (!(this instanceof Person)) {
    return new Person(name);
  }
  this.name = name;
}

/* Apply the functionalities to the
prototype object of Person */
fns.call(Person.prototype);

/* make an instance of Person */
const person = Person('Amin');

/* call methods */
console.log(person.hello());
console.log(person.bye());
console.log(person.getName());

