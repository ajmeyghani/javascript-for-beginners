/**
 * an Array is an object that is essentially
 * can hold a list of things of different types.
 */

// empty array
var empty = [];

 // array (list) of numbers
var nums = [1,2,3,4]; // 4 elements
var firstNum = nums[0]; // 1

// array of different data types
// 1) object
// 2) number 5
// 3) another array of two elements [1,2]
// 4) a function
// 5) an undefined value
var mixed = [{id: 1}, 5, [1,2], function x () {}, undefined];


//
// An array is an object and has methods
// and attributes
//


// var nums = [1,2,3,4];
// returns the number of elements
var l = nums.length;

// add 5 to the end of nums list.
// now nums is [1,2,3,4,5];
nums.push(5);

// add 0 to the front of the nums list
// now nums is [0,1,2,3,4,5];
nums.unshift(0);


// remove the item at the end of the nums list
// now nums is [0,1,2,3,4];
nums.pop(); // 5 is returned

// remove the item from the front of the list
// now nums is [1,2,3,4];
nums.shift();


/**
 * Slice, splice, functional methods
 */









