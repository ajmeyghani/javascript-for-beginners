function Task(spec) {
  this.name = spec.name;
  this.isDone = false;
  this.type = 'task';
  this.duration = spec.duration || 0;
}

Task.prototype.done = function () {
  this.isDone = true;
};

Task.prototype.notDone = function () {
  this.isDone = false;
};

Task.prototype.getDuration = function () {
  return this.duration;
};

Task.prototype.getName = function () {
  return this.name;
};

Task.prototype.getType = function () {
  return this.type;
};

function Chore(spec) {
  Task.call(this, spec);
  this.type = 'chore';
}
Chore.prototype = Object.create(Task.prototype);
Chore.prototype.constructor = Chore;

Chore.prototype.getType = function () {
  return 'Override gettype - ' + this.type;
};


var t1 = new Task({
  name: 'Exercise',
  duration: '20'
});

var c1 = new Chore({
  name: 'Clean House',
  duration: '50'
});


console.log(t1.getName(), 'type: ', t1.getType());
console.log(c1.getName(), 'type: ', c1.getType());

