console.clear();
/*

null
undefined
boolean
string
number
symbol

object


*/

var n = null;
var u = undefined; // same as var u;
var x = 5;
var name = "Amin"; // also you can use single quote
var isConnected = false;

// user is an object
var user = {
    name: "Tom",
    id: 1
};

// account is an object
// with another object inside it.
var account = {
    id: 1,
    type: "checking",
    data: {
        total: 55234,
        isUp: true
    }

};

var accountData = account.data; // object


console.log(accountData.id);

// Arrays are object
var numbers = [1,2,3]; // object
