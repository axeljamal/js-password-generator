// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Variable Declaration
let passwordText = document.querySelector("#password");
let userInput = [];
let passwordCharacters = [];
let password = "";

// Function to prompt user for password options
function getPasswordOptions() {
  password = "";
  let passwordCharOption = prompt(
    "Please enter the number between 10 - 64 for the length of the password",
    ""
  );

  passwordLength = parseInt(passwordCharOption, 0);

  // Loop if answer is outside the parameters
  while (passwordLength <= 10 || passwordLength >= 64) {
    alert("Password length must be between 10-64 characters Try again");
    let passwordLength = prompt(
      "Please enter the number between 10 - 64 for the length of the password"
    );
  }

  // Confirm the length of characters
  alert(`The length of your password will be ${passwordLength} characters`);

  // Determine parameters of password
  let addSpecialChar = confirm(
    "Click OK to confirm if you would like to add special characters"
  );
  let addNumericChar = confirm(
    "Click OK to confirm if you would like to add numeric characters"
  );
  let addUpperCased = confirm(
    "Click OK to confirm if you would like to add lowercase characters"
  );
  let addLowerCased = confirm(
    "Click OK to confirm if you would like to add uppercase characters"
  );

  // Loop if user input is outside the parameters
  while (
    addUpperCased === false &&
    addLowerCased === false &&
    addSpecialChar === false &&
    addNumericChar === false
  ) {
    alert("You must choose at least one parameter");
    let addSpecialChar = confirm("Click OK to add special characters");
    let addNumericChar = confirm("Click OK to add numeric characters");
    let addUpperCased = confirm("Click OK to add lowercase characters");
    let addLowerCased = confirm("Click OK to add uppercase characters");
  }

  // Assign an action to the password parameters

  if (lowerCasedChar) {
    passwordCharacters.push(lowerCasedCharacters);
  }
  if (upperCasedChar) {
    passwordCharacters.push(upperCasedCharacters);
  }
  if (specialChar) {
    passwordCharacters.push(specialCharacters);
  }
  if (numericChar) {
    passwordCharacters.push(numericCharacters);
  }
  if (passwordCharacters.length === 0) {
    alert(
      "you must select at least one range of characters to generate a password"
    );
    getPasswordOptions();
  } else {
    generatePassword();
    passwordCharacters = [];
  }
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
