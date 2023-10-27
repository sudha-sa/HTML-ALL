// let a = ()=>{
//     return new Promise((resolve, reject)=>{
//   setTimeout(() => {
//      resolve(456)
//   }, 4000);
// })
// }

// (async()=>{
  
// let b = await a()
// console.log(b) 
// let c = await a()
// console.log(c) 
// let d = await a()
// console.log(d)  
// })()



//destructuring
// let arr = [3, 5, 8, 9 , 11, 45]

// let a = arr[0]
// let b = arr[1]

// let [a, b, ...rest] = arr
// console.log(a, b, rest)

// let [a, , , ...rest] = arr
// console.log(a, rest)

// let {a, b} = {a:1, b:5}
// console.log(a, b)

// //spread operator
// let arr1 = [3,5,8]
// let obj1 = {...arr1}
// console.log(obj1)

// function sum(v1, v2, v3){
//     return v1 + v2 + v3;
// }
// console.log(sum(...arr1))


// let obj2 = {
//     name: "harry",
//     company: "company xyz",
//     add: "xyz"
// }
// console.log({...obj2, name: "john"})
// // console.log({name: "john", ...obj2})



//local scopes and global scopes

// let is block scopes
// var is global scopes
// function scopes in function



///hoisting
var a;
console.log(a)
greet()
function greet(){
    console.log("gm")
}
var a = 9;//hoisted in top but initialization is not
console.log(a)
