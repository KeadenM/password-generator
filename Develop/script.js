// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var password = "";
  var upperrange = [0,25];
  var lowerranger = [26,52];
  var numberrange = [53,63];
  var specialrange = [64,95];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@]\[^_`{|}~";  
  
   
  var pwlength = prompt("How many characters? (Needs to be at least 8 characters)");
  var num = prompt("Include numbers?");
  var up = prompt("Include Uppercase letters?");
  var low = prompt("Include Lowercase letters?");
  var special = prompt("Include special characters");

  if (pwlength >=8){

    if (up.lower().trim() == "yes" || up.lower().trim() == "y"){

    }
    if (low.lower().trim() == "yes" || low.lower().trim() == "y"){
      
    }

    if (numb.lower().trim() == "yes" || numb.lower().trim() == "y"){
    
    }

    if (special.lower().trim() == "yes" || special.lower().trim() == "y"){
      
    }
  }
  else {
    alert("Length must be 8 or more characters");
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
