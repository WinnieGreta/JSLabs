var globalVar = "global var";
let globalLet = "global let";
const globalConst = "global const";

{
    var blockVar = "block var";
    let blockLet = "block let";
    const blockConst = "block const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);

function show() {
    var funcVar = "func var";
    let funcLet = "func let";
    const funcConst = "func const";
}

show();

console.log(funcVar);
console.log(funcLet);
console.log(funcConst);