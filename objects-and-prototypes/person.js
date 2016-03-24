/**
 * Using functional mixin to represent a person who
 * is a designer and a developer.
 *
 * A person can be a designer and a developer.
 * var SuperPerson = Person::Designer::Developer;
 * SuperPerson is someone who has the characteristics and basic
 * functionalities of a human. And he/she has the capabilities
 * of a developer and a designer.
 *
 * Acquire behavior from multiple prototype objects:
 *   - person prototype
 *   - designer prototype
 *   - developer prototype
 *  A SuperPerson can be created using mixins instead of
 *  the inheritance chaining (classical inheritance/single prototypal inheritance)
 *  In JavaScript there is no good justification for defining hierarchies. Because of
 *  the nature of the language, it is easier to work with objects and invoke functions.
 *  Programming in JavaScript uses a different paradigm that is more familiar to those
 *  who have spent years working with class-oriented languages like Java. Languages like
 *  Clojure and Lua use a different paradigm for programming or representing the problem
 *  domain.
 *
 * Back to the concept of mixins:
 * One important concept is that functions don't have to be inherited to be invoked.
 *
 * Function reuse: function delegation: any public function can be called with call or apply.
 * because of this code, there is no actual need to organize code in classes or what not.
 *
 * Mixins are a good compromise (to constructor inheritance, single prototype inheritance)
 * In the real world, objects require functionalities from multiple prototypes
 *   - light and flexible
 *   - organize functionality with themes
 *   - still descriptive as class hierarchies but much much more flexible
 *   - saves you from premature organization traps and single-ancestry and deeply chained models
 *   - require minimal syntax
 *   - play well with unchained prototypes in javascript
 *
 *
 * Mixins Basics
 * - a mixin can be a plain object, a prototype, a function, whatever
 *
 * Use case: creating circular, oval or rectangular buttons
 *
 * Classic Mixin method: augmenting the prototype with two objects
 *
 * For example: to create a roundButton, we can augment the prototype with
 * clickableFns and circleFns objects:
 *
 * extend(RoundButton.prototype, clickableFns);
 * extend(RoundButton.prototype, circleFns);
 *
 * Functional Mixins: mixins are verbs rather than nouns
 *
 * Mixins become functions: circleFn, actionFn. And then the functions are invoked
 * in the context of the object prototype:
 *
 * var RountButton = function () {};
 * circleFn.call(RoundButton.prototype);
 * actionFn.call(RoundButton.prototype);
 *
 * var circleFn = function () {
 *   this.grow = function () {
 *     this.radius += 1;
 *   }
 * };
 *
 * var actionFn = function () {
 *   this.fire = function () {
 *     console.log('firing button');
 *   };
 * };
 *
 * - This is much more concise way of programming
 * - Function is cloned not copied and no copy of properties up the chain by accident.
 * - no need for extra checks
 * - this always refers to the receiver object (the instance)
 *
 * Adding Options
 *
 * An option object can be passed in as a parameter to configure the values:

var withOval = function(options) {
  this.area = function() {
    return Math.PI * this.longRadius * this.shortRadius;
  };
  this.ratio = function() {
    return this.longRadius/this.shortRadius;
  };
  this.grow = function() {
    this.shortRadius += (options.growBy/this.ratio());
    this.longRadius += options.growBy; };
  this.shrink = function() {
    this.shortRadius -= (options.shrinkBy/this.ratio()); this.longRadius -= options.shrinkBy;
  };
}

var OvalButton = function(longRadius, shortRadius, label, action) {
    this.longRadius = longRadius;
    this.shortRadius = shortRadius;
    this.label = label;
    this.action = action;
};
withButton.call(OvalButton.prototype);
withOval.call(OvalButton.prototype, { growBy: 2, shrinkBy: 2 }); // passing the option object here.
var button2 = new OvalButton(3, 2, 'send', function() { return 'message sent' });
button2.area(); //18.84955592153876
button2.grow();
button2.area(); //52.35987755982988
button2.fire(); //'message sent'
 *
 * Adding Caching
 * The function call can be cached with a closure.

// Adding the closure here. (the IIFE)
var withRectangle = (function() {
    function area() {
        return this.length * this.width;
    }

    function grow() {
        this.length++, this.width++;
    }

    function shrink() {
        this.length--, this.width--;
    }
    return function() {
        this.area = area;
        this.grow = grow;
        this.shrink = shrink;
        return this;
    };
})();
var RectangularButton = function(length, width, label, action) {
    this.length = length;
    this.width = width;
    this.label = label;
    this.action = action;
}
withClickable.call(RectangularButton.prototype);
withRectangle.call(RectangularButton.prototype);
var button3 = new RectangularButton(4, 2, 'delete', function() { return 'deleted' });

 * The examples above can be used to define a person object.
 */


/**
 * What does a designer do?
 * design, draw
 *
 * what does a developer do?
 * program, design software
 *
 * What does a person do?
 * Breathe, walk, run
 */


/**
 * Designer
 */

var designer = (function () {
  function draw() {
    console.log('Designer is drawing now...');
  }
  return function () {
    this.draw = draw;
    return this;
  };
}());


/**
 * Developer
 */

var developer = (function () {
  function code() {
    console.log('Developer is coding now.');
  }
  return function () {
    this.code = code;
    return this;
  };
}());


/**
 * Person
 */

var person = (function () {
  function breathe () {
    console.log('Person is breathing');
  }
  function getName () {
    return this.name;
  }
  return function () {
    this.breathe = breathe;
    this.getName = getName;
    return this;
  };
}());


/**
 * Super person
 */

var SuperPerson = function (name) {
  this.name = name;
}

person.call(SuperPerson.prototype);
developer.call(SuperPerson.prototype);
designer.call(SuperPerson.prototype);


var kim = new SuperPerson('Kim Johnson');
var tom = new SuperPerson('Tom Cruise');
console.log(kim.getName());
console.log(tom.draw(), tom.getName());


