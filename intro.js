// GO OVER ADDING SCRIPT TAG
// UTILIZING THE JAVASCRIPT CONSOLE
// VARIABLES USING VAR, LET, OR CONST

// [X] Adding a Script tag
// Adding a Script tag: In HTML, a script tag is used to include JavaScript code into a web page.
// [X] JavaScript Console
// JavaScript Console: The JavaScript console is a tool used for debugging and testing code, providing a way to view and log output and errors.
// [X] Variables using var let or const (Hoisting)
// Variables using var, let, or const (Hoisting): JavaScript variables can be declared using var, let, or const. Variables declared with var are hoisted, while let and const have block scope.
// [] Primitives/Value Types
// Primitives/Value Types: JavaScript has primitive data types such as numbers, strings, booleans, null, undefined, and symbols.
// [] Assignment vs Declaration
// Assignment vs Declaration: Declaration refers to creating a variable, while assignment is giving it a value.
// [] PEMDAS
// PEMDAS: PEMDAS stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right). It is the order of operations in arithmetic expressions.
// [] Conditional Statements Truthy & Falsy
// Conditional Statements Truthy & Falsy: In JavaScript, values can be evaluated as truthy or falsy in conditional statements.
// [] Reference Types Objects & Arrays
// Reference Types Objects & Arrays: Objects and arrays in JavaScript are reference types, which means they store references to their actual values rather than the values themselves.
// [] Using debugger
// Using debugger: The "debugger" keyword in JavaScript can be used to set breakpoints in code and facilitate debugging.
// [] What is the DOM?
// What is the DOM? The DOM (Document Object Model) is a programming interface for web documents, representing the structure and content of an HTML or XML document.
// [] Drawing to the DOM
// Drawing to the DOM: JavaScript can dynamically create and modify HTML elements on a webpage, changing its appearance and content.
// [] What is an event (onclick)
// What is an event (onclick): An event in JavaScript is an action or occurrence that happens on a webpage, such as a click (onclick), hover, or keypress, which can trigger specific code to run.
// [] Functions & Parameters reference vs value and returns
// Functions & Parameters reference vs value and returns: JavaScript functions can accept parameters by value or reference, affecting how they modify objects or primitives. Functions can also return values.
// [] Passing parameters from the DOM
// Passing parameters from the DOM: Data from the webpage's elements (e.g., forms) can be passed as parameters to JavaScript functions.
// [] Timeouts
// Timeouts: JavaScript setTimeout() function is used to delay the execution of code by a specified time interval.
// Understanding these concepts is crucial for building interactive and dynamic web applications using JavaScript.

let animal = "Bear"
const species = "Mammal"
console.log('[ANIMAL]:', animal + " [SPECIES]:", species)
animal = "Snake"
// species = "Reptile"
console.log('[ANIMAL]:', animal + " [SPECIES]:", species)

// GO OVER DATA SCOPE

let fifty = 50

if(fifty == 50) {
  fifty = 20
}

// let twenty = 20

// if(twenty == 20) {
//   console.log('Is this working?')
// }

if(fifty == 50) {
  console.log('That checks out.')
} else if(fifty == 20) {
  console.log("I don't think that math checks out.")
}


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


// TODO MAKE SURE TO EXPLAIN PEMDAS
//  parenthesis, exponents, multiplication, division, addition, subtraction. 