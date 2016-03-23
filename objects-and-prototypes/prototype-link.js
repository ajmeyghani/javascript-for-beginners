var taskBaseP = {
  pName: 'taskBaseP',
  getName() {
    return this.name;
  }
};

var taskP = Object.create(taskBaseP);

Object.assign(taskP, {
  // task related stuff. More specific.
  pName: 'taskP',
  setDone() {
    this.isDone = true;
  },
  reset() {
    this.isDone = false;
  },
  getIsDone() {
    return this.isDone;
  }
});

var t1 = Object.create(taskP);
t1.name = 'clean';
t1.isDone = false;

console.log(t1.getIsDone());
t1.setDone();
console.log(t1.getIsDone());

var pProtoLink = t1.__proto__;
console.log(pProtoLink);
