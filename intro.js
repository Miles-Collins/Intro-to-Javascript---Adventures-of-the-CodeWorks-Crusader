// THE DATA TYPES

// STRINGS

""; // double quotes
let doubleQuotes = "Double Quotes"
''; // single quotes
let singleQuotes = 'Single Quotes';
``; // backticks
let backticks = `Backticks`


// NUMBERS
-1 // negative
let negative = -1
0 // zero
let zero = 0
1 // positive
let positive = 1
0.5 // decimals
let decimal = 0.5

// BOOLEAN

true // true
// Show this reserved words like true
// can't do let true = true
let thisIsTrue = true
false // false
let thisIsFalse = false

// THE WEIRD ONES

null // null - Null has no value
let imNull = null
console.log('Im null', imNull)
undefined // undefined - Undefined has never been given a value
let imUndefined;
console.log("I'm undefined", imUndefined)
NaN // Not a number
let notANumber = 100 / "something" 
console.log('Not a number', notANumber)

// OBJECTS
let newObject = {
  firstName: "First",
  lastName: "Last",
  age: 77,
  isObject: true,
  oldObject: {
    olderObject: {
      oldestObject: {
        firstName: null,
        lastName: undefined,
        age: NaN
      }
    }
  }
}

console.log('New object', newObject)
console.log('[OLDEST OBJECT]', newObject.oldObject.olderObject.oldestObject)

// ARRAYS

// Arrays are a collection of data, and they are also stored by their indexes
let animals = ["bear", "lion", "tiger", "elephant", "bird", "bee", "snake", "fish"]

console.log('[ANIMALS]', animals)

let lion = animals[1]

console.log('[LION]', lion)

let myTypesArray = ["First", "Last", 77, true, null, undefined, NaN]

console.log('[MY TYPES ARRAY]', myTypesArray)

// LAST OBJECT WITH AN ARRAY

let alphaObject = {
  animals: ["bear", "bird", "bee", "fish"],
  canItFly: false,
  cantItSwim: "no",
  canItBear: 0
}

console.log('[ALPHA OBJECT]', alphaObject)
