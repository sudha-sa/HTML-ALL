
// console.log('11-marks-average-grade');

// // approach 1

// /* const MARKSARRAY = [55, 85, 55, 65];

// function calculateAverageGrade(currentMarks) {
//   let totalMarks = 0;
//   let averageMarks = 0;
//   let grade;

//   for(let mark of currentMarks) {
//     totalMarks += mark;
//   }
//   // console.log('totalMarks:', totalMarks);
//   averageMarks = (totalMarks/currentMarks.length);
//   // console.log('averageMarks:', averageMarks);

//   if(averageMarks < 70) return grade = 'D'; 
//   if(averageMarks < 80) return grade = 'C';
//   if(averageMarks < 90) return grade = 'B';
//   if(averageMarks <= 100) return grade = 'A';
// }

// console.log('Grade:', calculateAverageGrade(MARKSARRAY)); */

// // approach 2 - create two different functions with single responsibility principle

// const MARKSARRAY = [55, 85, 55, 65];

// function calculateAverage(currentArray) {
//   let total = 0;
//   for (let curValue of currentArray) {
//     total += curValue;
//   }
// //   console.log('total:', total);
//   return (total/currentArray.length);
// }

// // console.log(calculateAverage(MARKSARRAY));

// function calculateGrades(_currentArray) {
// const average = calculateAverage(_currentArray);
// //   console.log('average:', average);

//   if(average < 70) return grade = 'D'; 
//   if(average < 80) return grade = 'C';
//   if(average < 90) return grade = 'B';
//   if(average <= 100) return grade = 'A';
// }

// console.log('Grade:',calculateGrades(MARKSARRAY));




// console.log('12-random-bingo-card');

// window.onload = createBingoCard;

// function createBingoCard() {
//   // console.log('in createBingoCard');

//   for (var i = 1; i <= 24; i++) {
//     var newRandomNum = Math.floor(Math.random() * 75);
//     // console.log('newRandomNum', newRandomNum);
//     document.getElementById('Square' + i).innerHTML = newRandomNum;
//   }
// }
 



// console.log('13-show-prime-numbers');

// // approach 1

// /* function showPrimeNumbers(numberLimit) {
//   for (let curNum = 2; curNum <= numberLimit; curNum++) {
//     // console.log('curNum', curNum);

//     let isPrime = true;
//     for (let factor = 2; factor < curNum; factor++) {
//       // console.log('factor', factor);
//       if (curNum % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log('Prime Number', curNum);
      
//     }
//   }
// } 

// showPrimeNumbers(20);*/

// // approach 2

// function showPrimeNumbers(numberLimit) {
//   for (let curNum = 2; curNum <= numberLimit; curNum++) {
//     // console.log('curNum', curNum);
//     if (isPrimeNumber(curNum)) {
//       console.log('Prime Number:', curNum);
//     }
//   }
// }

// function isPrimeNumber(_number) {
//   for (let factor = 2; factor < _number; factor++) {
//     // console.log('factor', factor);
//     if (_number % factor === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// showPrimeNumbers(30);




// console.log('14-sum-of-arguments');

// function sumOfArguments(...items){
//   // rest operator converts anything passed as an array
//   console.log('current items/values to add:', items);
//   return items.reduce((n1, n2) => n1 +n2);
// }

// console.log('Sum:', sumOfArguments(10, 2, 8, 4, 6));
// // console.log('Sum:', sumOfArguments([10, 2, 8, 4, 6]));




// console.log('15-sum-of-arguments-array');

// function sumOfArguments(...items){
//   if(items.length ===1 && Array.isArray(items[0])) {
//     items = [...items[0]]
//     console.log('current items/value to add:', items);
//     return items.reduce((n1,n2) => n1+n2);
//   }
// }

// console.log('sum', sumOfArguments([10,2,4,6,8]));



// console.log('16-circle-area-object-read-only-property');

// const CIRCLE = {
//   name: 'mainCircle',
//   lineColor: 'red',
//   bgColor: 'gray',
//   radius: 1,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// console.log('CIRCLE.area:', CIRCLE.area);



// console.log('17-create-array-from-argument-range');

// function generateArrayFromRange(startNum, endNum) {
//     const rangeArray = [];
//     for(let curNum = startNum; curNum <=endNum; curNum++){
//       rangeArray.push(curNum);
//     }
//    return rangeArray;
// }

// const range1 = generateArrayFromRange(1,5);
// console.log(range1);
// console.log('-----');
// const range2 = generateArrayFromRange(-5,0);
// console.log(range2);



// console.log('18-array-includes-element-exists');

// function includes(arrayToSearch, elementToSearch) {
//   console.log('arrayToSearch: ', arrayToSearch);
//   console.log('elementToSearch: ', elementToSearch);
//   for(let curElement of arrayToSearch) {
//     if(curElement === elementToSearch) {
//       return true;
//     } 
//   }
//   return false;
// }

// const versionArray = [1, 2, 5, 7, 2];
// console.log(includes(versionArray, 2));
// console.log('---------');
// const ageArray = [21, 22, 25, 27, 25];
// console.log(includes(ageArray, 30));



// console.log('19-array-excludes-value-to-new-array');

// function excludes(arrayToExclude, elementsToExcluded) {
//   console.log('arrayToExclude: ', arrayToExclude);
//   console.log('elementsToExcluded: ', elementsToExcluded);
//   const outputArray = [];
//   for(let curElement of arrayToExclude) {
//     if(!elementsToExcluded.includes(curElement)) {
//       outputArray.push(curElement)
//     }
//   }
//   return outputArray;
// }

// const versionArray = [1, 2, 5, 7, 2];
// const newVesionArray = (excludes(versionArray, [2]));
// console.log('newVesionArray: ', newVesionArray);

// console.log('---------');

// const ageArray = [21, 25, 22, 25, 30, 25, 30];
// const newAgeArray = (excludes(ageArray, [25,30]));
// console.log('newAgeArray: ', newAgeArray);



// console.log('20-array-count-search-occurances');

// approach 1
// function countSearchOccurances(arrayToSearch, elementsToSearch) {
//   // console.log('arrayToSearch: ', arrayToSearch);
//   // console.log('elementsToSearch: ', elementsToSearch);
//   let count = 0;
//   for(let curElement of arrayToSearch) {
//     if(curElement === elementsToSearch) {
//       count++;
//     }
//   }
//   // console.log('search count:', count);
//   return count;
// } 

// approach 2 
// function countSearchOccurances(arrayToSearch, elementsToSearch) {

//   return arrayToSearch.reduce((countAccumulator, currentSearchElement) => {
//     let countOccurances = (currentSearchElement === elementsToSearch) ? 1 : 0;
//     // console.log('countAccumulator', countAccumulator, 'arrayToSearch', arrayToSearch, 'elementsToSearch', elementsToSearch,);
//     return countAccumulator + countOccurances;
//   },0)
// }

// const versionArray = [1, 2, 5, 7, 2];
// const versionCount = (countSearchOccurances(versionArray, 2));
// console.log('versionCount: ', versionCount);

// console.log('---------');

// const ageArray = [21, 25, 22, 25, 30, 25, 30];
// const ageCount = (countSearchOccurances(ageArray, -25));
// console.log('ageCount: ', ageCount);



// console.log('21-array-get-max-largest-number');

// // approach 1
 
// // function getLargestNumber(arrayToSearch) {
// //   if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';
// //   let largestNumber = arrayToSearch[0];

// //   for (let i = 1; i < arrayToSearch.length; i++) {
// //     if (arrayToSearch[i] > largestNumber) {
// //       largestNumber = arrayToSearch[i];
// //     }
// //   }
// //   return largestNumber;
// // } 

// // const versionArray = [5, 2, 3, 4, 7];
// // const largestVersion = (getLargestNumber(versionArray));
// // console.log('largestVersion: ', largestVersion);

// // console.log('---------');

// // const ageArray = [21, 25, 22, 25, 30, 25, 30];
// // const maxAge = (getLargestNumber(ageArray));
// // console.log('maxAge: ', maxAge); 

// // approach 2 

// function getLargestNumber(arrayToSearch) {
//   if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';

//   return arrayToSearch.reduce((largestNumber, curentSearchElement) => {
//     return (curentSearchElement > largestNumber) ? curentSearchElement : largestNumber;
//   })
// }

// const versionArray = [5, 2, 3, 4, 7];
// const largestVersion = (getLargestNumber(versionArray));
// console.log('largestVersion: ', largestVersion);

// console.log('---------');

// const ageArray = [21, 25, 22, 25, 30, 25, 30];
// const maxAge = (getLargestNumber(ageArray));
// console.log('maxAge: ', maxAge);



// console.log('22-array-filter-sort-map');

// const studentsArray = [
//   { name: 'Suraj', year: 2019, ranking: 4 },
//   { name: 'Amit', year: 2019, ranking: 5 },
//   { name: 'Akash', year: 2018, ranking: 4 },
//   { name: 'Dinanath', year: 2019, ranking: 7 },
//   { name: 'Sagar', year: 2017, ranking: 3 },
// ]

// console.log('Higest Rank Holders:',
//   studentsArray
//     .filter(student => student.year === 2019 && student.ranking >= 5)
//     .sort((n1, n2) => n1.ranking - n2.ranking)
//     .reverse()
//     .map(student => student.name)
// );



// console.log('23-object-create-students-and-address-object');

// const Students = {
//   name: 'Dinanath',
//   age: 35,
//   rank: 5,
//   country: 'India',
// }

// const Address = {
//   street: 'Sir DJ Road',
//   city: 'Mumbai',
//   pinCode: 401209,
//   state: 'MH',
//   country: 'India',
// }

// function showObjectDetails(obj){
//   for(let key in obj){
//     console.log(key,':', obj[key])
//   }
// }

// showObjectDetails(Students);
// console.log('----------');
// showObjectDetails(Address);



// console.log('24-object-create-object-factory-constructor-function');

// // Factory function/method - camelCasing - camel notation - use return keyword
// function createObjFactoryMethod(name, age, rank, country) {
//   return {
//     name, age, rank, country
//   }
// }

// let Students1 = createObjFactoryMethod('Dinanath', 35, 5, 'India');
// console.log('Students1', Students1);

// // Constructor function/method - pascalCasing - pascal notation - use this keyword
// function Student(name, age, rank, country) {
//   this.name = name;
//   this.age = age;
//   this.rank = rank;
//   this.country = country;
// }

// let Students2 = new Student('Amit', 30, 4, 'Hindustan');
// console.log('Students2', Students2);



console.log('25-object-equality');

// Constructor function/method - pascalCasing - pascal notation - use this keyword
function Student(name, age, rank, country) {
  this.name = name;
  this.age = age;
  this.rank = rank;
  this.country = country;
}

let Students1 = new Student('Dinanath', 35, 5, 'India');
console.log('Students1', Students1);

let Students2 = new Student('Dinanath', 35, 5, 'India');
console.log('Students2', Students2);

console.log('----------');

// Objects are reference type, objects can have same properties but they are from different memeory location, they can be equal if both objects have same properties
function isObjectEqual(obj1, obj2){
  return obj1.name === obj2.name &&
         obj1.age === obj2.age &&
         obj1.rank === obj2.rank &&
         obj1.country === obj2.country
}

console.log('isEqual', isObjectEqual(Students1, Students2));

console.log('----------');

// Objects are same if both are pointed to same object
function isObjectPointSame(obj1, obj2){
  return obj1 === obj2;
}

let isSame1 = isObjectPointSame(Students1, Students2);
console.log('isSame1', isSame1);

let Students3 = Students2;
let isSame2 = isObjectPointSame(Students2, Students3);
console.log('isSame2', isSame2);