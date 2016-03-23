console.clear();
/*
    Execution sequence:
    - Read line by line
    - Execute now, or later.
*/
var x = 1;
setTimeout(function () { console.log("not really.") ;}, 1000);
console.log("end");

// Asynchronous vs Synchronous
// sync: step by step
// Asynchronous: schedule actions: eg: doing something after getting data from server.
