function Task (name) {
  this.isDone = false;
  this.name = name;
}

Task.prototype.done = function () {
  this.isDone = true;
};
Task.prototype.getName = function () {
  return this.name;
};

function Chore(name) {
  var self = this;
  Task.call(self, name); //super
}

Chore.prototype = Object.create(Task.prototype);
Chore.prototype.constructor = Chore;

var c1 = new Chore('C1');
var c2 = new Chore('c2');

console.log(c1.getName(), c2.getName());;

















