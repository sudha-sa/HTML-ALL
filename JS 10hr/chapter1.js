
// //var,const and comments

// var score = 34;
// var score = 56;
// console.log(score)

// let points = 23;
// // let points = 54;
// console.log(points)

// // const
// // const value = 10;

// const value = 18;
// console.log(value)



// //data types
// //7 types

// //numbers 1,2,33,444,4.5

// //string "i am string", "34", "", ''

// //boolean true/false 

// //null 
// // let score = null;
// score = 34;
// console.log(score)

// //undefined variables

// //object complex data types

// //symbols

// //strings

// console.log("hello coder")
// let firstname = "wow";
// let lastname = "programmer";

// console.log(firstname,lastname)

// //string concatination
// // 1) using + operator
// let fullname = firstname + "" + lastname
// console.log(fullname)

// //2) using template literals

// let fullname = `i want to become ${firstname} ${lastname}`
// console.log(fullname)

// // string character
// console.timeLog(firstname[2])

// console.log(firstname.toUpperCase())
// console.log( lastname.indexOf("m"))



// //common string method
// let hobbies = ` coding reading running`;
// ///trim method
// let result = hobbies.trim()
// // console.log(hobbies)

// //index of

// console.log(result.lastIndexOf("reading"))
// //includes method
// console.log(result.includes("Coding"))



// //slice method

// let fullname = "wowprogramme"
// let result = fullname.slice(0,5)
// // console.log(fullname.slice(0,5)) //exclude last one 0-4

// console.log("original string =",fullname)
// console.log("extracted string =",result)



// //string "split" method
// let favoriteColors = "Brown, Blue, Black, Gray";
// let arrColors = favoriteColors.split(' ,');

// console.log(arrColors)


// //js string are immutable
// let str = "hello";
// str[0] = "p";
// console.log(str)



//numbers
let score = 50;
// console.log(score, typeof score)
// let result = score/2;
// console.log(result)



// //mathematical expresssion

// let result = score * 2 + (4*3) - 8 / 2 % 4;
// console.log(result);

// // concatination of numbers
// let resultline = 'my total no. is =' +result;
// console.log(resultline); 



// //loose equality operator
//  let age = 22;
// //  console.log(age == "22")
// console.log(age !='22')
//  //strict equality operator
// //  let age = 22;
// //  console.log(age === "22")



// //type conversation

// let stringtype = "54";

// console.log(stringtype,typeof stringtype);

// //number method
// let numbertype = Number(stringtype)
// console.log(numbertype,typeof numbertype)



// //string method
// let numbertype = 54;
// console.log(numbertype,typeof numbertype)
 
// let stringtype = String(numbertype)
// console.log(stringtype, typeof stringtype)



// //boolean method true/false
// let age = 43;
// let booleanvalueofage = Boolean(age);
// console.log("boolean Value of age is ", booleanvalueofage)



// //array

// let dishes = ['biryani','chat','chana']
// console.log(dishes[0])

// //modify the array
// dishes[0] = 'khakra';
// console.log(dishes);

// // method
// // join method
// // console.log(dishes.join('-'))

// // indexof
// console.log(dishes.indexOf('chat'))

// let newdishes = ["sweet",'panipuri']
// console.log(dishes.concat(newdishes));

// let updateddishes = dishes.concat(newdishes)

// //length method

// // console.log(updateddishes.length)

// // //push method
// // console.log(updateddishes.push("bhallay"))

// // console.log(updateddishes.pop())



//boolean value and comparison operator

let booleanType = true;
let stringtype = 'true';

console.log(typeof booleanType, typeof stringtype)

//method return boolean value

let email = "wowcoder@e.com"
let booleanvalue = email.includes("@")
console.log(booleanvalue)

