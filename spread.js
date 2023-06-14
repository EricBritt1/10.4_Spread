//Q1 WRONG! //HELP

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

  //Refactored Version

  const myFilterOutOdds = (...nums) => {
    return nums.filter(function(num) {
        return num % 2 ===0
    })
  };

  // Q2 findMin
/* 

  Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator. 

*/

//Right but too complicated
const findMin = (...nums) => {
    return nums.reduce(function(leastVal, currentVal) {
   return  leastVal > currentVal ? leastVal = currentVal : leastVal
    })
}

// const findMin = (...args) => Math.min(...args)

//Q3 mergeObjects
/*

Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

*/

const basicObject1 = {
    player1 : "noob",
    character : "luke"
};

const basicObject2 = {
    player2 : "pro",
    character : "chun-li"
};

//Right but could do on one line
const mergeObjects = (object1, object2) => {
    return {...object1, ...object2}
};


//Q3 doubleAndReturnArgs (STRUGGLED I don't know how!)
/*
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
*/

// ???
/* 
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
*/


//Slice and Dice!

//Q1 
/* remove a random element in the items array and return a new array without that item. */
//Don't know where to start NEED HELP

const testArray = [2,3,4];

const removeRandom = (items) => {
console.log(...items);
}

//Q2
/* Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2]
};

//Q3
/* Return a new object with all the keys and values from obj and a new key/value pair */
// I don't know how to put the new value pair inside object.

const practiceObj = 
{
    hello : 'nope',
    bye : 'yes'
}
const addKeyVal = (obj, key, value) => {


    
    return { 
      ...obj, [key] : value
    }
};

//Q4
/* Since I can't do question 3 I definitely can't do question */


// Q5
/* Combine two objects and return a new object */
const exObj = {
    trying : "hard"
}
const combine = (obj1, obj2) => {
return {...obj1, ...obj2}
};


// Q6 
/* Return a new object with a modified key and value. */


const update = (obj, key, val) => {
    const newObj = {...obj}
    newObj[key] = val
    return newObj
};
