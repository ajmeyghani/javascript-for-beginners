/* Most Common Operators */

/*

+: plus
-: minus
/: division
*: multiplication
%: modulus (remainder)


// look at these later.

new
delete

*/

var y = 1 + 2;  //-> 3
var x = 10 - 1; //-> 9
var w = 2 * 10; // -> 20
var h = 12/3;   //-> 4
var r = 10%2;   //-> 0


// comparison

1 < 3 //-> true
5 > 1 //-> true
2 == 3  // will be discussed in the coercion section.
5 === 5 // -> true (always use triple equals)

// ternary operator
// condition ? if true value : otherwise value;

var value = true ? 5 : 0; // if true, set value to 5, otherwise set to 0.
var otherValue = {} ? 1 :0; // if true, set `otherValue` to 1, otherwise set to 0.


// typeof operator

typeof undefined; // -> undefined
typeof 1; // -> number
typeof "Amin"; // -> string
typeof true; // -> boolean

typeof NaN; // -> number
typeof null; // -> object (which is not really true)
typeof function fn () {}; // -> function (which is not really true)
typeof {id: 1} //-> object
