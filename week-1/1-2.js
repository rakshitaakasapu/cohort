// function sum(a,b){
//     return a+b ;
// }
// const value = sum(1,2)
// console.log(value);

//-----------------------------------------------------------------------------------------

// function sum(num1,num2, fnToCall){
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is: "+ data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is: "+ data);
// }

// const ans = sum(1,2,displayResultPassive);

//----------------------------------------------------------------------------------

function calculate(a,b,finalFn){
    const result = finalFn(a,b);
    return result;
}

function sum(a,b){
    return a+b;  
}

function minus(a,b){
    return a-b;
}

const ans = calculate(1,2,sum);
console.log(ans);