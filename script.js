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

// Introducing variables to put user input data

numbers = numericCharacters;
lowerCase = lowerCasedCharacters;
upperCase = upperCasedCharacters;
symbols = specialCharacters;
// var totalCharacters = "";  //picking up commas when adding user input choices hence changed to array below.
var totalCharacters = [];
var passwordLength = 0;
// password1 = password;

 // Function to prompt user for password options
function getPasswordOptions() {
  totalCharacters = []; //added here to refresh the page automatically. Otherwise was retaining previous total charecter length.
  passwordLength = +prompt ("Please choose your password length.\nPassword length should be between 10 and 64 character")

  if (passwordLength < 10 || passwordLength > 64) {
     alert("minimum character rquired is 10 and maximum 64");
     return false
   }
   if (isNaN (passwordLength)) {
     alert("password length should be a number");
     return  false
   }

  // if (passwordLength >=10  || passwordLength >= 64) {
  //  passwordLength = totalCharacters.length
  // };  


// prompt("Would you like to use numbers")
   var numbers = confirm ("Would you like to use numbers?") 
   if (numbers === true) {
    // totalCharacters += numbers  //Shortens the length  due to numbers being bolean value
    // totalCharacters += numericCharacters //doubling the total character length.
    totalCharacters.push(...numericCharacters); //https://dmitripavlutin.com/javascript-merge-arrays/
  };
// console.log("Numeric Character Length =" + " " +(numericCharacters.length))
// console.log("Total Characters Length =" + " " +(totalCharacters.length))

 // prompt("Would you like to use lowercase?")
 var lowerCase = confirm ("Would you like to use lower case?") 
   if (lowerCase === true) {
    //  totalCharacters += lowerCasedCharacters //doubling the total charecter length
    totalCharacters.push(...lowerCasedCharacters); //https://dmitripavlutin.com/javascript-merge-arrays/
  };

 // prompt("Would you like to use upper case?")
 var upperCase = confirm ("Would you like to use upper case?")
   if (upperCase === true) {
    //  totalCharacters += upperCasedCharacters // doubling total charecter length
    totalCharacters.push(...upperCasedCharacters); //https://dmitripavlutin.com/javascript-merge-arrays/
   };
 
 // prompt("Would you like to use symbols?")
 var symbols = confirm ("Would you like to use symbols?")
   if (symbols === true) {
    //  totalCharacters += specialCharacters //doubling total charecter length
    totalCharacters.push(...specialCharacters); //https://dmitripavlutin.com/javascript-merge-arrays/
   };

  //  console.log("Total Character = " +"" + totalCharacters) //working till here.
  if (!numbers && !lowerCase && !upperCase && !symbols) {
    alert("you must choose one character type for password to generate")
    return false
  }
  alert("Your Choices: \n uppercase = " + " "+(upperCase) + " \n lowercase = " + " "+(lowerCase) + " \n symbols = " + " "+(symbols) + "\n numbers = " + " "+(numbers) + "\n Character Length = "+ " "+(passwordLength));
  return true
}

// Function for getting a random element from an array
// reference: https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
function getRandom(arr) {
return (arr)[Math.floor(Math.random() * (arr.length))];
}
 

// Notes to myself: If in return command, the first (arr) is not writen
// and we just start with Math.floor, then no letters are produced but 
// just the position of that letter in the array. 
//  Just Math.random produces numbers with decimal, Math.floor is used to round it.

// console.log(getRandom(numericCharacters)) //working
// console.log(getRandom(upperCasedCharacters)); //working
// console.log(getRandom(lowerCasedCharacters));  //working
// console.log(getRandom(specialCharacters)); //working

// Function to generate password with user input

function generatePassword() {
 var password1 = ""
 //if statement addedhere so if "for loop" is run we dont get undefined value in password window, to fix my last 3 bugs)
 if (getPasswordOptions() === false){ 
return password1
 }
// Console logging all the variable using before to see if any link is broken
//  console.log(totalCharacters)
//  console.log(passwordLength)
//  console.log(totalCharacters.length)
 
//  var password1 = " "; // variable created to input password based on user input
 for (var i = 0; i < passwordLength; i++){
   password1 += totalCharacters[Math.floor(Math.random() * (totalCharacters.length))];
 }
 console.log(password1)
 return password1


}
// console.log(password1) //Working
// console.log(generatePassword)  //checking to see if anything is produce in console - full code is coming up


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


//NOTES
// MY ERROR  WAS TO DO WITH PASSWORD LENGTH!!!!!!!!
//  after moving to global scope, started seeing length out put in console when used in generate password fubction.
//  In total character [] if I put 0 as my initial value , it was picking up as 1. Hence left it empty.
// Total character += user options was doubling character lenght by picking up the commas in array of 
// user imput i.e numeric, lowerCasedCharecters, upperCasedCharecters and Symbols. Not sure why because
// I changed the total charecter intial value from just string to an array. Didnt go exploring further.
// + infront of prompt changes string to numeric. Saw on u tube and thought thats neat than typing parseInt().