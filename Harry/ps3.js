//loop


//for loop
// let sum = 0
// let n = prompt("enter the value of n")
// n = Number.parseInt(n)

// for(let i=0; i<n; i++){
//     sum += (i+1)
// }
// console.log("sum of first " + n + " natural number is " + sum)


//for in loop
// let obj = {
//     harry: 80,
//     shubh: 70,
//     rahul: 60
// }
// for(let a in obj){
//     console.log("marks of " + a + " are " + obj[a])
// }


//for of loop
// for(let b of "sudha"){
//     console.log(b)
// }


//while loop

// let i = 0;
// while(i<n){
//     console.log(i)
//     i++;
// }

// //do while
// do{
//     console.log(i)
//     i++;
// }while(i<n)



//functions
 
//ps

// let marks = {
//     harry: 90,
//     rahul: 80,
//     priya: 60,
//     angel: 50
// }
// //01
// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

// //02
// for(let key in marks){
// //    console.log("the marks of " + key + " are " + marks[key])
// }

//03
let cn = 34
let i 
while(i != cn){
    i = prompt("enter a number")
    console.log("try again");
}
console.log("you have entered a correct number");

// //04
// const mean = (a, b, c, d)=>{
//     return (a+b+c+d)/4
// }
// console.log(mean(4,5,6,7))