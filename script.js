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

numbers = numericCharacters;
lowerCase = lowerCasedCharacters;
upperCase = upperCasedCharacters;
symbols = specialCharacters;


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
  // if (numbers === true) {
    // userInput = userInput.concat(numbers);
  //   alert("You said YES to numbers")
  // }
  //  else {
  //   alert("You said NO to numbers");
  // }

  var lowerCase = confirm ("Would you like to use lower case?") 
  // if (lowerCase === true) {
    // userInput = userInput.concat(numbers);
  //   alert("You said YES to numbers")
  // }
  //  else {
  //   alert("You said NO to numbers");
  // }

  var upperCase = confirm ("Would you like to use upper case?")
  // if (upperCase === true) {
    // userInput = userInput.concat(upperCase);
  //   alert("You said YES to upper case")
  // } 
  // else {
  //   alert("You said NO to upper case")
  // }

  var symbols = confirm ("Would you like to use symbols?")
  // if (symbols === true) {
    // userInput = userInput.concat(symbols);
  //   alert("You said YES to symbols")
  // } 
  // else {
  //   alert("You said NO to symbols")
  // }

  if (!numbers && !lowerCase && !upperCase && !symbols) {
    alert("you must choose one character type for password to generate")
    return
  }
  alert("Your Choices: \n uppercase = " + " "+(upperCase) + " \n lowercase = " + " "+(lowerCase) + " \n symbols = " + " "+(symbols) + "\n numbers = " + " "+(numbers) + "\n  Character Lenght = "+ " "+(passwordLength));
 
  // Notes: all the alerts commented out above were too much, I was getting fed up
  // can imagine the user, but I wanted user to know what their choices was hence 
  //  alert on line 150.

  // below commented out section is me playing where argument goes withouth getting console error.
  // if  (getPasswordOptions = numbers, lowerCase, upperCase, symbols, length) {
    // userInput = [[userInput].concat(numbers)(lowerCase)(upperCase)(symbols)];
  
    // }
}
// console.log (userInput);
// Function for getting a random element from an array
// reference: https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
function getRandom(arr) {
return (arr)[Math.floor(Math.random(arr) * (arr.length))];

// [Math.floor(Math.random(numbers) * numericCharacters.lenght)];
// [Math.floor(Math.random(loerCase) * lowerCasedCharacters.lenght)];
// [Math.floor(Math.random(upperCase) * upperCasedCharacters.lenght)];
// [Math.floor(Math.random(symbols) * specialCharacters.lenght)];
// Notes to myself: If in return command, the first (arr) is not writen
// and we just start with Math.floor, then no letters are produced but 
// just the position of that letter in the array. 
//  Just Math.random produces numbers with decimal, Math.floor is used to round it.

}
// console.log(getRandom(numbers))
// console.log(getRandom(upperCase));
// console.log(getRandom(lowerCase));
// console.log(getRandom(symbols));



// Function to generate password with user input
function generatePassword() {

}

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