const numbers =[3,5,7,8,9];
// for(let i=0; i<numbers.length; i++){

//     const element = numbers[i];
//     const result = element * element;
//     console.log(result);
// }

// function square(element){
//     return element * element;
    
// }

// const result = numbers.map(square);
// console.log(result);

// function square = element => element * element;
// const square = x => x * x;

// const result =  numbers.map(function square(element){

//     return element * element;
// })

const result = numbers.map(x => x * x);
const result2 = numbers.filter(x => x>5);
const result3 = numbers.find(x => x>5);

console.log(result3);

console.log(result2);

console.log(result);

//filter & find almost same . filter gives you an array but find gives you a single value that condition match the first value.