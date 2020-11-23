// We have defined a function named squareList. You need to complete the code for the 
// squareList function using any combination of map(), filter(), and reduce() so that 
// it returns a new array containing only the square of only the positive integers 
// (decimal numbers are not integers) when an array of real numbers is passed to it. An 
// example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.


const squareList = (arr) => {

  const positives = arr.filter((numbers) => numbers > 0);
  const integers = positives.filter((numbers) => Number.isInteger(numbers));
  const squared  = integers.map((numbers) => Math.pow(numbers, 2));
  return squared;

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
