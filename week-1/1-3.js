// class Animal{
//     constructor(name,legs,speaks){
//         this.name = name;
//         this.legs = legs;
//         this.speaks = speaks;
//     }
//     static myType(){
//         console.log("Animal")
//     }
//     speak(){
//         console.log("hey!"+ this.speaks);
//     }
// }
// console.log(Animal.myType());
// let dog = new Animal("doodi",4,"bow bow");
// dog.speak();

//----------------------------------------------------------------------------------

function calculateSum(n){
    let a = 0;
    for(let i=0;i<10000000;i++){
    a=a+i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum(10000000);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs-beforeTimeInMs)