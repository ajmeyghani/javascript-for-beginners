/*
    Every function has a special property called
    prototype.
*/

var Task = function (name) {
    this.isDone = false;
    this.name = name;
};

Task.prototype = {
    isDone: function () {
        return this.isDone;
    },
    finish: function () {
        this.isDone = true;
    }
};


var shop = new Task("shopping");
var clean = new Task("clean");

var tasks = [shop, clean];


shop.finish();

console.log(tasks);

// Performance: you don't have to create the function for every instance.
// store it one place (the prototype object) and every instance can get it

