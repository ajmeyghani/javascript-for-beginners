function hello(a, b, name) { // declaration
  var msg = a + b + name;
  return msg;
}

var message = hello(1,2,'a');
console.log(message);


var h = function getName () {

}; // expression
var value = h();
console.log(value);
