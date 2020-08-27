// function add(a, b){
//     return a + b
// }

// function subtract(a, b){
//     return a - b;
// }

// console.log(add(4,5));

//the return would be add only
// module.exports = add

//the return would an object
// module.exports = {
//    add,
//    subtract
// }

// equal to the above
// module.exports.add = add;
// module.exports.subtract = subtract

// shorthand equal to the above
// exports.add = add
// exports.subtract = subtract


// it will not work as exports is just an alias to module.exports ..var exports = module.exports
// exports = add;
exports.add = (a,b) => a + b