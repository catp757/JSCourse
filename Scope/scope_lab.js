// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

// Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "show: I'm a block-scoped var";
    let functionLet = "show: I'm a block-scoped let";
    const functionConst = "show: I'm a block-scoped const";
}
show();
    
//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

function practice() {
    var newVar = "practice: I'm a block-scoped var";
    let newLet = "practice: I'm a block-scoped let";
    const newConst = "practice: I'm a block-scoped const";
    var newVar = "practice: new value for var";
    //let newLet = "practice: new value for let"; // throws error
    //const newConst = "practice: new value for const"; // throws error
    console.log(newVar); 
    console.log(newLet); 
    console.log(newConst); 
}
practice();

var newVar = "out of practice: new value for var";
let newLet = "out of practice: new value for let";
const newConst = "out of practice: new value for const";
console.log(newVar); 
console.log(newLet); 
console.log(newConst); 
