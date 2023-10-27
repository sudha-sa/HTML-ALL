// console.log('1-swapping-variables');

// let value1 = 'one';
// let value2 = 'two';

// // original values
// console.log('original', value1);
// console.log('original', value2);

// // swapping values
// let value3 = value1;
// value1 = value2;
// value2 = value3;

// console.log('swap', value1);
// console.log('swap', value2);



// console.log('2-max-number');

// function findMaxNumber(num1, num2){
//   // 1. long syntax
//   /* if(num1 > num2){
//     return num1
//   } else {
//     return num2
//   } */

//   // 2. short syntax
//   /* if(num1 > num2) return num1;
//   else return num2; */

//   // 3. ternary short syntax
//   return (num1 > num2) ? num1 : num2;
// }

// let checkMax1 = findMaxNumber(10, 5);
// console.log('Max Number:',checkMax1);

// let checkMax2 = findMaxNumber(10, 15);
// console.log('Max Number:',checkMax2);

// let checkMax3 = findMaxNumber(100, 100);
// console.log('Max Number:',checkMax3);




// console.log('3-landscape-portrait');

// function isLandscape(width, height){
//   // 3. ternary short syntax
//   return (width > height);
// }

// let checkWidthHeight1 = isLandscape(800, 600);
// console.log('Landscape:',checkWidthHeight1);

// let checkWidthHeight2 = isLandscape(600, 800);
// console.log('Landscape:',checkWidthHeight2);

// let checkWidthHeight3 = isLandscape(1024, 768);
// console.log('Landscape:',checkWidthHeight3);




// console.log('4-fizzbuzz-algorithms');

/* 
<h3>Write a function which checks given input/parameter:</h3>

<ul>
  <li>If input/parameter is divisible by 3 print => Fizz</li>
  <li>If input/parameter is divisible by 5 print => Buzz</li>
  <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
  <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
  <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
</ul>
*/

// function isfizzBuzz(arg){
//   if(typeof arg !== 'number'){
//     return ('Nan - Not a Number! Please Input Number');
//   }

//   if((arg % 3 === 0) && (arg % 5 === 0)) {
//     return 'FizzBuzz';
//   }

//   if(arg % 3 === 0) {
//     return 'Fizz';
//   }

//   if(arg % 5 === 0) {
//     return 'Buzz';
//   }

//   else {
//     return 'Some odd number entered: ' + arg;
//   }

// }

// let checkFizzBuzz1 = isfizzBuzz('one');
// console.log(checkFizzBuzz1);

// let checkFizzBuzz2 = isfizzBuzz(true);
// console.log(checkFizzBuzz2);

// let checkFizzBuzz3 = isfizzBuzz(9);
// console.log(checkFizzBuzz3);

// let checkFizzBuzz4 = isfizzBuzz(10);
// console.log(checkFizzBuzz4);

// let checkFizzBuzz5 = isfizzBuzz(30);
// console.log(checkFizzBuzz5);

// let checkFizzBuzz6 = isfizzBuzz(11);
// console.log(checkFizzBuzz6);




// console.log('5-speed-limits');

// /* 
// <h3>Write a function which checks given input/parameter:</h3>
  
// <ul>
//   <li>If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'</li>
//   <li>If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point </li>
//   <li>If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'</li>
// </ul>
// */

// const SPEEDLIMIT = 70;
// const KMPERPOINT = 5;

// function checkSpeedLimit(curSpeed) {
//   if (curSpeed <= SPEEDLIMIT) {
//     return ('Good Safe Driving!');
//   } else {
//     let penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
//     if (penaltyPoint < 10) {
//       return ('Speed Limit Crossed by Penalty Point: ' + penaltyPoint);
//     } else {
//       return ('License Suspended!');
//     }
//   }
// }

// let checkPoin1 = checkSpeedLimit(40);
// console.log(checkPoin1);

// let checkPoin2 = checkSpeedLimit(70);
// console.log(checkPoin2);

// let checkPoin3 = checkSpeedLimit(75);
// console.log(checkPoin3);

// let checkPoin4 = checkSpeedLimit(99);
// console.log(checkPoin4);

// let checkPoin5 = checkSpeedLimit(120);
// console.log(checkPoin5);




// console.log('6-odd-even-number-loop');

// function isOddEvenNumber(curLimit) {
//   for(let i = 0; i <= curLimit; i++) {
//     //  if (i % 2 === 0) {
//     //   console.log(i , 'EVEN');
//     // } else {
//     //   console.log(i , 'ODD');
//     // }
     

//     const alertMessage = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i , alertMessage);
//   }
// }

// isOddEvenNumber(10);
// // isOddEvenNumber(17);




// console.log('7-count-truthy-falsy-values');

// /*
// <h3>Write a function which checks and count the truthy values from an array</h3>

// Falsy values in JavaScript are:
// <ul>
//   <li>false</li>
//   <li>0 (zero)</li>
//   <li>undefined</li>
//   <li>null</li>
//   <li>''</li>
//   <li>NaN</li>
// </ul>
// */

// const valuesArray = [0, 1, 2,'', undefined, false, true];

// function checkCountTruthyFalsy(curArray) {
//   let truthyCount = 0;
  
//   for (let value of curArray) {
//     // no need to check if(value !== false || value !== 0 || value !== '' or ...)
//     if (value) {
//       truthyCount++;
//     }
//   }
//   return truthyCount;
// }

// console.log(checkCountTruthyFalsy(valuesArray));




// console.log('8-object-string-properties-key');

// function showStringProperties(curObj) {
//   for(let key in curObj) {
//     // console.log('key/prop:', key);
//     if(typeof(curObj[key]) === 'string') {
//       console.log(key,':', curObj[key]);
//     }
//   }
// }

// const Person = {
//   name: 'Dinanath',
//   age: 40,
//   height: 5.6,
//   country: 'India',
//   designation: 'UI Developer'
// }

// showStringProperties(Person);
// console.log('----------');

// const Technology = {
//   name: 'JavaScipt',
//   version: 6,
//   purpose: 'Scripting language for Web',
//   developer: 'Netscape Corporation'
// }

// showStringProperties(Technology);
// console.log('----------');




// console.log('9-sum-of-multiples');

// function sumOfMultiples(curLimit) {

//   let sumOfMultipleValue = 0;

//   for(let i = 0; i <= curLimit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       // console.log(i);
//       sumOfMultipleValue +=i;
//     }
//   }
//   // return sumOfMultipleValue;
//   console.log(`sumOfMultipleValue of 3 & 5 upto ${curLimit} digit is:`, sumOfMultipleValue);
// }

// sumOfMultiples(10);
// /* like 2 and 4 so...2+4 = 6*/




console.log('10-netsted-loop-star-pattern');

function showPattern(totalRowsPatternCount) {
  for (let curRow = 1; curRow <= totalRowsPatternCount; curRow++) {
    // console.log(curRow);
    let patternDesign = '';
    for (let i = 0; i < curRow; i++) {
      patternDesign += '*'
    }
    console.log(patternDesign);
  }
}

showPattern(10);
