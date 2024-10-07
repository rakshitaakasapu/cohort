// const fs = require("fs");

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// })

// console.log("hey");
// let a =0;

// for(let i=0;i<1000000000;i++){
//     a++;
// }

// console.log("hey 2");

//--------------------------------------------------------------------
//promises

// const fs = require("fs");

// function rakaReadFile(){
//     console.log("inside rakaReadFile");
//     return new Promise(function(resolve){
//         console.log("inside Promise");
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("before readfile");
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// rakaReadFile().then(onDone)

//------------------------------------------------------------------------------------
// var d = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("foo");
//     },1000)
// });

// function callback(){
//     console.log(d);
// }

// console.log(d);
// d.then(callback);

//------------------------------------------------------------------------------------------
//async await

function rakaAsynFunction(){
    let p = new Promise(function(resolve){
        //do async logic
        setTimeout(function(){
            resolve("hey");
        },1000)
    });
    return p;
}

async function main(){
    //no callbacks, no .then syntax
    let value= await rakaAsynFunction() //if we dont put await then the o/p is "Promise {pending}"
    console.log(value);
    console.log("hey2");
}

main();
console.log("after main");