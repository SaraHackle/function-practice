
//practice example of a function that calculates age of a person in dog years
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    
    return ageInDogYears

}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)

// Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
// Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())
// Log the string of "When it comes to pets," plus the returned value of the function.
// If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".

const makeFavoriteString = (dogBreed) => {
    if (dogBreed === "meow") {
    const faveDogString = 'I like cats'
    return faveDogString
    } else {
    let faveDogString = `my favorite dog breed is ${dogBreed}`
    return faveDogString
    }

}
const currentFaveString = makeFavoriteString("meow")
console.log( "When it comes to pets,",  currentFaveString)

