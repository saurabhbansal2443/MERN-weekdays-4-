

// function sum(a,b){
//     return a+b
// }

// console.log(sum(1,2))


function sum(a ){
    let fn =  function(b){
        return a + b ;
    }
    return fn 
}

// let add100 = sum(100);

// let add200 = sum(200);
 
// let ans = add100(200);

// let ans1 = add200(300); 

// console.log( ans1 )

// let ans = sum(100)(200);

// console.log(ans )

// function getDetails(name , age ){
//     return `my name is ${name} and my age is ${age}`
// }

// console.log( getDetails("saurabh", "24") )


(function abc(){
    console.log(" abc is called ")
}
)()
