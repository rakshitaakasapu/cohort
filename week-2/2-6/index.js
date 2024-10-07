// const sum=(a,b)=>{
//     return a+b;
// }

// app.get("/",(req,res)=>{

// })

// const ans = sum(1,2);
// console.log(ans);

//--------------------------------------------------------------------------------

//given an array, give me back a new array in which every value is multiplies by 2
//[1,2,3,4,5]
//[2,4,6,8,10]

// const input = [1,2,3,4,5];
// const newArray=[];

// for(let i=0;i<input.length;i++){
//     newArray.push(input[i]*2);
// }

// console.log(newArray);

//-----------------OR-------------------------------------------------------------------------------------

//-----------------MAP--------------------------------------------IMP-------------------------------------

// const input =[1,2,3,4,5];
// function transform(i){
//     return i*2;
// }
// const ans = input.map(transform);
// console.log(ans);



// const input =[1,2,3,4,5];
// const ans = input.map(function(i){
//     return i*2;
// });
// console.log(ans);

//-----------------------------FILTER-------------------------------------

//given an input, give me back all the even values

const input = [1,2,3,4,5];

// function filter(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const ans = input.filter(filter);
// console.log(ans);

const ans = input.filter((n)=>{
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);

