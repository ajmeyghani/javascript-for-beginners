/**
 * Set up the Task Prototype
 * @type {Object}
 */
var TaskPrototype = {
  done() {
    this.isDone = true;
  },
  notDone() {
    this.isDone = false;
  },
  getDuration() {
    return this.duration;
  },
  getName() {
    return this.name;
  }
};

/**
 * Create a function to make Task objects.
 * @param {[type]} spec [description]
 */
function Task (spec) {
  var task = Object.create(TaskPrototype);
  task.isDone = false;
  task.duration = spec.duration;
  task.name = spec.name;
  task.type = 'Generic Task';
  return task;
}

function Chore(spec) {
  var chore = Task(spec);
  chore.type = 'Chore Task';
  return chore;
}

var t1 = Task({
  name: 'read',
  duration: '20'
});

console.log(t1);

var chore = Chore({
  name: 'Clean House',
  duration: '30'
});


console.log(chore);
