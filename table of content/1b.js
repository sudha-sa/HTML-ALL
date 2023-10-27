/* smallest no.*/
// console.log(findSmallest([30, 45, 60, 7]));

// function findSmallest(arr) {
//     return Math.min(...arr);
//   }


/*alphabeticalorder*/
// console.log(AlphabeticalOrder('hello'));

// function AlphabeticalOrder(str) {
//     return str
//       .split("")
//       .sort()
//       .join("");
//   }


/*factorize*/
// console.log(factorializer(8));

// function factorializer(int){
//     if(int <=1){
//         return 1;
//     }
//     else{
//         return int*factorializer(int - 1);
//     }
// }


/*identify even and odd*/
// console.log(oddoreven(9));

// function oddoreven(int){
//     let output = int % 2;
//     if(output ==0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }


/*eliminate all odd no.*/
// console.log(evenOnly([1, 2, 3, 4, 5, 6, 7, 8]));
// // console.log(evenonly({1, 2, 3, 4, 5, 6}));

// function evenOnly(arr){
//     let result = arr.filter(arr => arr %2 == 0);
//     return result;
// }


/*return number only*/
// console.log(numbersOnly(['text', 3, 7, 'github', 23, 'dev']));

// function numbersOnly(arr){
//     return arr.filter(arr => typeof arr == "number");
// }


/*add up no.*/
// console.log(addup(9));

// function addup(num){
//     if(num <= 1){
//         return num;
//     }
//     else{
//         return num + addup(num-1);
//     }
// }


/*min max length & average*/
// console.log(MinMaxLengthAverage([7, 13, 3, 77, 100]));

// function MinMaxLengthAverage(arr){
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const len = arr.length;

//     const ave = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / len;
//     const average = ave(arr);

//     return[min, max, len, average];
// }


/* ascrnding order*/
// arr = [45, 34, 23, 12, 7]
// console.log(arr.sort());

// console.log(sortNumsAscending([7, 13, 3, 77, 100]));

// function sortNumsAscending(arr) {
//     let sorter = (a, b) => {
//       return a - b;
//     };

//     if (arr == []) {
//         return [];
//       } else if (arr == null) {
//         return [];
//       } else {
//         return arr.sort(sorter);
//       }
//     }


/* roman no.*/
// romanNumbers(1989)
// function romanNumbers(num) {
//     let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     let romanNumerals = [
//       "M",
//       "CM",
//       "D",
//       "CD",
//       "C",
//       "XC",
//       "L",
//       "XL",
//       "X",
//       "IX",
//       "V",
//       "IV",
//       "I"
//     ];
  
//     let roman = "";
  
//     for (i=0; i<values.length; i++) {
//         while(values[i] <= num){
//             roman += romanNumerals[i];
//             num -= values[i];
//         }
//     }
//     return roman;
// } 

//   console.log(romanNumbers(1989));


/* absolutely sum*/
// getAbsSum([-1, -3, -5, -4, -10, 0]);

// function getAbsSum(arr){
//     const reducer = (acc, currval) => {
//         return acc + currval;
//     };

//     return Math.abs(arr.reduce(reducer))
// }

/*looping triangle*/
// for (x = "#"; x.length <= 7; x += x) {
//     console.log(x);
//   }


/*no. of words*/
// countWords('hello this is system');

// function countWords(str){
//     return str.split(" ").length;
// }


// MultiplyByLength([4,1,1]);

// function MultiplyByLength(arr) {
//     let len = arr.length;
//     for (i = 0; i < len; i++) {
//       arr[i] = arr[i] * len;
//     }
//     return arr;
//   }


// console.log(checkEnding("please", "please"));
// console.log(checkEnding("samurai", "zi"));

// function checkEnding(str1, str2) {
//     return str1.endsWith(str2);
//   }


// console.log(doubleChar('exercise'));

// function doubleChar(str) {
//     let x = str.split("");
//     return x.map(x =>x.repeat(2)).join("");
//   }


// console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'apollo'));

// function findIndex(arr, element) {
//     return arr.indexOf(element);
//   }


var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 6);

console.log(result);



var myArray = [];
var i = 10;

// Only change code below this line.
do {
    myArray.push(i);
    i++;
    console.log(i)
} while (i < 15)