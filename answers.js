// write a function that returns the first letter of a string.

function firstLetter(string) {
    return string.charAt(0);
}
firstLetter("jimbus");

//write a function that returns the last letter of a string.
function lastLetter(string){
    var lastChar = string.length -1;
    return string.charAt(lastChar);
}

lastLetter("doopy");

/*write a function that takes a string and number and and 
returns the character at the position represented by the number.*/

function stringPosition(string, num){
    return string.charAt(num -1);
}
stringPosition("something", 5);

//Write a function that takes two numbers and adds them together. 
function addition(num1, num2){
    return num1 + num2;
}
addition(3,7);
//write a functin that takes two numbers and multiplies them together.
function multiply(num1, num2){
    return num1 * num2;
}
multiply(4,7);

/*Write a function that takes two numbers and a string. If the string is ‘add’, 
then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’,
return the product. If the string is ‘div’, return the ratio. Otherwise return 0. */
function calculator(num1, num2, string){
    if(string === "add"){
        return num1 + num2;
    }
    else if(string === "subtract"){
        return num1 - num2
    }
    else if(string === "mult"){
        return num1*num2;
    }
    else if(string === "div"){
        return num1/num2;
    }
    else{
        return 0;
    }
}

calculator(5,10, "subtract")

/*Write a function that takes a string
and a number, and returns the string repeated that many number of times*/

function repeater(string, num){
    return string.repeat(num);
}
repeater("dumbo",7);
repeater("homer",2);
repeater("mat",0);

/*rite a function that takes a string, and returns the reverse of that string. 
For example, if you pass the function the string “hello”, it should return “olleh”*/
function reverseString(string){
var split = string.split("", string.length);
 return split.reverse().join("");
}

console.log(reverseString("PLAMBUS"));

/*Write a function that takes a number and returns the factorial of a number.
The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1*/
function factorial(num){
  if(num === 0){
    return 1;
  }
  else{
  for(var i = num - 1; i > 1; i--){
    num = num * i;
    }
  }
 return num  

  console.log(factorial(5));
  
/*Write a function that takes a phrase as a string, and returns the longest word in that phrase.
If the phrase contains more than one such word, return the first occurrence.*/
function bigWordGet(string){

  var split = string.split(" ");
  var splitSort = split.sort(function(a,b){
    return b.length - a.length;
  });
  return splitSort[0];
}

console.log(bigWordGet("somethings samethings not right here"));

/*Write a function that takes a phrase, and returns the same phrase with every 
word capitalized. For example, if you pass your function "hello world", it should
return “Hello World” and if you pass it “HELLO WORLD” or even "HeLLo WoRLD", 
it will also return "Hello World". */


function firstCharCap(string){
  var smallSplit= string.toLowerCase().split(" ");

  var array = [];
  for(var i = 0; i<smallSplit.length; i++){
    
    array.push(smallSplit[i].charAt(0).toUpperCase() + smallSplit[i].slice(1).toLowerCase());
  }
 return array.join(" ");

}

console.log(firstCharCap("HELLO WORLD"));

/*Write a function that takes an array and returns 
the largest number of the array.*/
function largestNum(array){
    
    array.sort(function(a,b){
        return b - a;
    });
    return array[0];
}
largestNum([356, 25698,2326556]);


/*Write a function that takes an array, and returns a filtered array. 
The filtered array should only contain the truthy values from the initial array.
Hint: there is an array method called filter that can help you with this */
function truArray(array){
 return array.filter(Boolean)
}


console.log(truArray([3, false, 0, NaN, 2, '', true]));

/*Write a function that takes an array of numbers, and returns the sum of 
all the numbers in the array */

function sumArray(array){
  var totalSum = 0;
  for(var i = 0; i<array.length;i++){
    totalSum += array[i];
}
return totalSum;
}

                
console.log(sumArray([2,2,2,2,2,2]));

/*Write a function that takes two arrays, and returns an array of all elements
that are only in one array. For example, with [1,2,3] and [1,2,4,5] the function
should return [3,4,5]. Test your function on different inputs. Hint: you should 
look up array methods indexOf and slice.*/

function uniqArray(arr1, arr2){
  var newArray = [];
  for(var i=0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i])=== -1){
      newArray.push(arr1[i]);
    }
  }
  for(var i = 0; i < arr2.length;i++){
    if(arr1.indexOf(arr2[i]) === -1){
      newArray.push(arr2[i]);
    }
  }
return newArray;
}

console.log(uniqArray([1,2,3,7,3,5],[1,1,3,9,8]))

/*write a function that takes an array and a function as arguments. 
The function should return a new array that maps every element of the input 
array by passing it through the function you received. */

function mapper(arr, funct){
    var newArr = [];
    for(var i = 0; i <arr.length; i++){
    newArr.push(funct(arr[i]));
    }
    return newArr;
}
console.log(mapper([1,2,3,4,2], function(n){
  return n + 5;
}));

//test