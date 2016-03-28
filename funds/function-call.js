/**
 * There are 4 different ways to call a function
 * 1) fn()
 * 2) fn.call()
 * 3) fn.apply()
 * 4) new fn()
 */

function add(a, b) {
  return a + b;
}

var x = add(1,2); //-> 3

var y = add.call(null, 1, 2); //-> 3

var z = add.apply(null, [1,2]); //-> 3

var w = new add(1,2); //-> new object (discussed later)
