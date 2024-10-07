// const jwt = require("jsonwebtoken");
// //generate,decode,verify

// const value={
//     name:"raka",
//     acc:123123
// }

// const token = jwt.sign(value,"secret"); //generate
// console.log(token);
// //token has been generated using this secret and hence this token can only  be verified using this secret

// const newToken = jwt.sign(value,"asdfg");
// console.log(newToken);

// //verify
// const verify1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFrYSIsImFjYyI6MTIzMTIzLCJpYXQiOjE3MjE4Mzg4NTN9.bzKjz4SbGQgqJ9TZ8dMVmgur_lubqNPUtJcYzy0M-NM","secret");
// const verify2 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFrYSIsImFjYyI6MTIzMTIzLCJpYXQiOjE3MjE4Mzg4NTN9.uORqNAiqLCNkch2uKVOuQIjCHoxtW2ZgG-PTKvZJCEA","asdfg");
// console.log(verify1,verify2);

//---------------------------TRY/CATCH---------------------------------------------------

try{
    let a;
    console.log(a.length);
    console.log("hey from try")
    }catch(e){
        console.log("hey from catch")
    }
console.log("hey");