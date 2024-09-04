let obj= {
    name : "saurabh",
    age : 24 ,
    address : {
        street : "1",
        city : "Delhi",
        country : "India",
    }
}

// let obj2 = obj ; // shallow copy 


// let obj2 = JSON.parse(JSON.stringify(obj));// Deep copy 


let obj2 = { ...obj }  // Shallow and deep copy mixture 

obj2.street = 79 ; 

console.log("original obj"  , obj )
console.log("Copy obj " , obj2 )



