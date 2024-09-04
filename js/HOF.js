// let calculate = function (cb , a, b){
//     return cb(a, b);    
// }


// let sum = function (a, b){
//     return a + b;
// } 

// let sub = function (a, b){
//     return a - b;
// }

// let mult = function (a, b){
//     return a * b;
// }

// let ans = calculate(mult, 1, 2);

// console.log( ans )

// HOF 

// MAP , FILTER , REDUCE 


let arr = [1,2,3,4]



// let ans = arr.map( function( ele , idx , arr ){
//     return ele *3 ; 
//  });

// console.log( ans )

// let ans = arr.filter(function(ele , idx , arr ){
//     return ele%2 == 0 ;
// })

// console.log( ans )

let ans = arr.reduce(function(accumaltor , current){
    return accumaltor + current
},30)

console.log( ans )

