/**
 * Function is an object with superpowers!
 */
function Hello() {}


/**
 * Silly static method that checks if the given
 * parameter is a function
 */
Hello.isFunction = function (f) {
  return typeof f === 'function';
};

/**
 * Static property
 */

Hello.type = 'Function';
console.log('Static property on Hello:', Hello.type);

/**
 * Using foo to test if it is a function
 */
function foo () {}
var isFn = Hello.isFunction(foo);
console.log('Is foo a function?', isFn);



/**
 * Function has a special property called prototype.
 * When a function is defined, an object is created
 * by javascript an is automatically assigned to
 * function.prototype in case you decide to use the
 * function as a constructor. If you never use a function
 * as a constructor, the function.prototype object will
 * never be used.
 */

var helloPrototypeProperty = Hello.prototype;
console.log('hello prototype property:', helloPrototypeProperty);

/**
 * The prototype object has a property called
 * constructor that links back to the function
 */

console.log('Hello prototype property constructor:', helloPrototypeProperty.constructor);


/**
 * A function object instance inherits from Function
 * In other words, a function object instance proto link
 * points to Function.prototype. And also, Function.protype proto
 * link points to Object.prototype.
 */

var helloProtoLink = Hello.__proto__ === Function.prototype;
console.log('Is hello proto link point to Function.prototype:', helloProtoLink);

var helloProtoProtoLink = Hello.__proto__.__proto__ === Object.prototype;
console.log('Is hello proto proto link point to Object.prototype:', helloProtoProtoLink);

console.log('Does Function.prototype.__proto__ point to Object.prototype?',
            Function.prototype.__proto__ === Object.prototype);

