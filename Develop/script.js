// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var pwlength = 0;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@]\[^_`{|}~";  
  prompt("How many characters? (Needs to be at least 8 characters)")
  prompt("Include Uppercase letters?")
  prompt("Include Lowercase letters?")
  prompt("Include numbers?")
  prompt("Include special characters")
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
