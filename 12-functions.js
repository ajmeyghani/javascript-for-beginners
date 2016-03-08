console.clear();

/*
    Functions objects, objects are not functions
*/

// Expression

var x = function fn (x,y) {};

// call with x()
// x is holding a function object.

// declare

function myFun(x,y) {} // no semi colon




/* take input, do something, return */
// x -> x + 1 -> return result

function add (x) {
    var result = x + 1;
    return result;
}

//call function: 1: ()
var result = add(1); // -> 2

console.log(result);


// call function 2: call

add.call(null, 5);

// call function 3: apply

add.apply(null, [23]);

// call function 4: new // create an object with prototype link
// special way of calling a function (on this later....)

var t = new add(5);
console.log(t);



/*
   Scope: Area in code
*/


var x = 1;  // defined in scope(1)

/********Scope(2)******/ // boundry

var y = 2;


    /********Scope(3)******/ // scope (3) inside scope (2)

        var z = 3;

    /*******************/


/*******************/


// Scope 1 is parent of scope 2 and 3
// Scope 2 is parent of scope 3.

// Scope 3 is the inner most scope. Has acess to all parents (2 and 1)
// Scope 2 is the child of scope 1. It has access only to its parent, scope 1.

// Scope 1 is blind to all its children. It cannot what's inside them
// Scope 2 is the parent of scope 3. It cannot see what scope 3 is doing.


function a () {
    var x = 1;
    function b () {
        var y = 2;
        function c () {
            var z = 3;
            //
        }
    }
}


