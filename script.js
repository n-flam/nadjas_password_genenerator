// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for UpperCase
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }

 // Function for LowerCase
 function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

 // Function for Numbers
 function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

 // Function for Symbols
 function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}