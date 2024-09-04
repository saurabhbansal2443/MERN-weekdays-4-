

// Rest Paramter 


// function sum ( ...args ){
//     let arr = args ;
    
//     let sum = arr.reduce(function(acc , curr){
//         return acc + curr;  
//     })

//     return sum ;    

// }

// console.log(sum(1,2,3,4 , 6 , 7))

// Spread Operator 

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

let arr1 = {
    name : "saurabh"
}

let arr2 = {
    age : 24 
}

let res = {...arr1 , ...arr2   }

console.log( res )

