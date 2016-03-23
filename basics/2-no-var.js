/*
    What happens if you don't use the var keyword?
*/
someVariable = 25;
console.log(someVariable);

console.log(window.someVariable); // a global object where the javascript is running.

// in the browser, the global object is the window object.
