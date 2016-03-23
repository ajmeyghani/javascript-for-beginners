/*
    Wrapping Primitives with
    an object.
*/


var name = "Amin";

var characters = name.length;

console.log(characters);

// the primitive is boxed (wrapped)
// and the method is called.

// behind the scenes

var name2 = new String("Amin2");
console.log(name2);
console.log(name2.valueOf());


// wrap and unwrap is done by javascript automatically
// you don't have to worry about it.'
// that's why people think everything is an object in javascript.
// It's not true, a string is a primitive.'
