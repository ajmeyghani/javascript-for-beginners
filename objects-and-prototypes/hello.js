function Hello () {}

Hello.prototype.sayHello = function () {
  console.log('hello!');
};


var h = new Hello();
var h2 = new Hello();

console.log(h.__proto__ === Hello.prototype);
console.log(h2.__proto__ === Hello.prototype);

h.sayHello();
h2.sayHello();

