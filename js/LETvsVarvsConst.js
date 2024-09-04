// Let vs Var vs Const

// Re-assign
// var and let  can be re-assgined
// const cannot be re-assigned

// Re-declaration

// var can be redeclared
// let and const  cannot be redecalred

// HOISTING -- variables and function will get the memory befare the actual code execution

// var let and const are hoisted but ( let and const are hoisted in a temporal dead zone which is not accessible )

// SCOPE

// block -- {}

// var is function scoped and let and const are block scoped
// var let and const are function scoped ( because function is also a block of code )

// function scope (done)
// lexical Scope ( DONE )
// scope chain (Done)
// global scope (done)
// block scope  (done)

// var a = 10;
// let b = 20;
// const x = 88;

// function one() {
//   var a = 99;

//   console.log(b);

//   function two() {
//     const c = 199;
//     console.log(c);

//     function three() {
//       console.log(a);
//       console.log(b);
//       console.log(c);
//     }
//     three();
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }

//   two();
//   console.log(a);
//   console.log(b);
// //   console.log(c);
// }

// one();
// console.log(a);
// console.log(b);
// // console.log(c);


let a = 10 ;
var b = 9
console.log( a );
console.log( b );
{
let a = 100 ;
// var b = 99 ;
 
console.log( a );
console.log( b );
}
console.log( a );
console.log( b );