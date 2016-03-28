var myPrototoypeObject = {
  sayHello: function () { console.log('hello!'); },
  sayBye: function () {}
};

var o1 = Object.create(myPrototoypeObject);
var o2 = Object.create(myPrototoypeObject);

o1.sayHello();

var o1Proto = Object.getPrototypeOf(o1);

console.log(o1Proto === myPrototoypeObject);




/**
 * 1) creates the object
 * 2) linking
 */
