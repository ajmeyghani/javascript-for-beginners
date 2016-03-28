/**
 * In JavaScript an object is non-primitive
 * data that holds properties and methods
 */

// empty object
var x = {};

// object with an id property.
// The value of the id property is 1.
// id is the key, and 1 is the value
// key -> value
// objects map keys to values
var user = {
  id: 1
};

// object with a method (function)
// key is hello and the value is a function.
var system = {
  hello: function () {
    return 'hello!';
  }
};

// to access the properties and methods
// we can use the `.` operator

var id = user.id; // -> 1

var helloValue = system.hello();// -> 'hello!'

// The possibilities with objects are endless!
// but keys are always strings (as of ES5)
// If you don't make the key a string, JS
// will make it for you behind the scenes.

var mays = {
  user: {
    id: 1,
    name: 'Mays',
    lastName: 'Meyghani',
    login: function () {
      return 'logging in to the system';
    }
  },
  skills: ['JS', 'JAVA', 'Unity', 'Android'],
  isActive: true
};

var skills = mays.skills; // ['JS', 'JAVA', 'Unity', 'Android']
var userId = mays.user.id; // 1
var maysLastName = mays.user.lastName; // Meyghani
var isMaysActive = mays.isActive; // true

// if the key is not set as a string,
// JS will make it a string:

var stringKey = {
  1: 'something', // 1 is converted to '1'
  '2': 'someting else'
};

// will become:
/*
var stringKey = {
  '1': 'something',
  '2': 'someting else'
};
 */


