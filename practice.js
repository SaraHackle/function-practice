//practice example of a function that calculates age of a person in dog years
const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7;

  return ageInDogYears;
};

const dogAge = calculateAgeInDogYears(45);
console.log(dogAge);

// Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
// Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())
// Log the string of "When it comes to pets," plus the returned value of the function.
// If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".

const makeFavoriteString = (dogBreed) => {
  if (dogBreed === "meow") {
    const faveDogString = "I like cats";
    return faveDogString;
  } else {
    let faveDogString = `my favorite dog breed is ${dogBreed}`;
    return faveDogString;
  }
};
const currentFaveString = makeFavoriteString("meow");
console.log("When it comes to pets,", currentFaveString);

// In this exercise, you are going to define more than one parameter for functions.

// Write a function named add that returns the sum of two numbers.
// Log the result of the add function.
// Modify the function to return the sum of three numbers.
// If the values of 17, 4, and 11 are provided as arguments, then the function must evaluate to 32.

const add = (num1, num2, num3) => {
  const sum = num1 + num2 + num3;
  return sum;
};
const currentSum = add(17, 4, 11);
console.log("Current Sum:", currentSum);
