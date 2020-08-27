// var opsObj = require('./add')
// var add = require('./add')
var obj = require('./add')
var {add} = require('./add')

function greet(name){
    console.log("Hello there, " + name + "!");
}

greet("faysal")

// console.log(opsObj.add(4,6));
// console.log(obj.add(4,6));
console.log(add(4,6));
// console.log(opsObj.subtract(4,6));