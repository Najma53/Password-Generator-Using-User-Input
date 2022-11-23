// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// var totalCharacters = [(specialCharacters), (numericCharacters), (lowerCasedCharacters),(upperCasedCharacters)];
// console.log(totalCharacters)

// userInput =[]
numbers = numericCharacters;
lowerCase = lowerCasedCharacters;
upperCase = upperCasedCharacters;
symbols = specialCharacters;
// creating function to get password lenght for later. Tried putting inside get password
// option but too confusing to work with nested functions.
function getPasswordLength () {
  passwordLength = 0
}

 // Function to prompt user for password options
function getPasswordOptions() {

  var passwordLength = +prompt ("Please choose your password length.\nPassword length should be between 10 and 64 character")
    if (passwordLength < 10 || passwordLength > 64) {
      alert("minimum character rquired is 10 and maximum 64");
      return
    }
    if (isNaN (passwordLength)) {
      alert("password length should be a number");
      return passwordLength
    }
var numbers = confirm ("Would you like to use numbers?")
  if (numbers === true) {
    hasnumbers = numbers;
    // userInput = userInput.concat(numericCharacters);
  }
  // if (numbers === false) {
      // userInput = userInput;
  // }

// prompt("Would you like to use lowercase?")
var lowerCase = confirm ("Would you like to use lower case?") 
  if (lowerCase === true) {
    haslowerCase = lowerCase;
    // userInput = userInput.concat(lowerCasedCharacters);
  }
  // if  (lowerCase === false) {
    // userInput = userInput;
  // }

// prompt("Would you like to use upper case?")
var upperCase = confirm ("Would you like to use upper case?")
  if (upperCase === true) {
    hasupperCase = upperCase;
    // userInput = userInput.concat(upperCasedCharacters);
  }
  console.log (upperCase)
  // if (upperCase === false) {
    // userInput = userInput;
  // } 

// prompt("Would you like to use symbols?")
var symbols = confirm ("Would you like to use symbols?")
  if (symbols === true) {
    hassymbols = symbols;
    // userInput = userInput.concat(specialCharacters);
  }
  // if (symbols === false) {
    // userInput = userInput;
// }
  if (!numbers && !lowerCase && !upperCase && !symbols) {
    alert("you must choose one character type for password to generate");
    return
  }
  alert("Your Choices: \n uppercase = " + " "+(upperCase) + " \n lowercase = " + " "+(lowerCase) + " \n symbols = " + " "+(symbols) + "\n numbers = " + " "+(numbers) + "\n  Character Length = "+ " "+(passwordLength));

}
// console.log (userInput);
// Function for getting a random element from an array
// reference: https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
function getRandom(arr) {
return (arr)[Math.floor(Math.random(arr) * (arr.length))];
}
 
function getRandomNumber() {
(numbers)[Math.floor(Math.random(numbers) * numericCharacters.length)];
}

function getRandomLower() {
(lowerCase)[Math.floor(Math.random(lowerCase) * lowerCasedCharacters.length)];
}

function getRandonmUpper() {
(upperCase)[Math.floor(Math.random(upperCase) * upperCasedCharacters.length)];
}

function getRandomSymbol() {
(symbols)[Math.floor(Math.random(symbols) * specialCharacters.length)];
}
// Notes to myself: If in return command, the first (arr) is not writen
// and we just start with Math.floor, then no letters are produced but 
// just the position of that letter in the array. 
//  Just Math.random produces numbers with decimal, Math.floor is used to round it.

// console.log(getRandom(numbers));
// console.log(getRandom(upperCase));
// console.log(getRandom(lowerCase));
// console.log(getRandom(symbols));
var RandomFunctions = {
lowerCase: getRandomLower,
upperCase: getRandonmUpper,
number: getRandomNumber,
symbol: getRandomSymbol

}
// Function to generate password with user input
function generatePassword(haslowerCase, hasupperCase, hasnumbers, hassymbols, passwordLength) {
 getPasswordOptions()
 passwordLength = getPasswordLength;
 haslowerCase = true;
 hasupperCase = true;
 hassymbols = true;
 hasnumbers = true;
var generatedPassword = ""
var typesCount = lowerCase + upperCase + numbers + symbols;
// console.log(typesCount)
var typesArr = [{lowerCase}, {upperCase}, {symbols}, {numbers}].filter
(
  item => Object.values(item)[0]
);

if (typesCount === 0) {
  return ""
}
  for (var i = 0; i < passwordLength; i+= typesCount) {
    typesArr.forEach (type => {

      var FunctionName = Object.keys(type)[0];

      console.log ("FunctionName" , FunctionName);
      generatedPassword += RandomFunctions[FunctionName]();
    })
  }

 generatepassword = (generatedPassword.slice(0, passwordLength));
return generatedPassword;
}
console.log (lowerCase, upperCase, symbols, numbers)



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);