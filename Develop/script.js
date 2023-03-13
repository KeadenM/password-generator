// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
function generatePassword(){
  var upperrange = [0,25];
  var lowerrange = [26,52];
  var numberrange = [53,63];
  var specialrange = [64,95];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@]\[^_`{|}~";  
  
   
  var pwlength = prompt("How many characters? (Needs to be at least 8 characters)");
  var num = prompt("Include numbers?");
  var up = prompt("Include Uppercase letters?");
  var low = prompt("Include Lowercase letters?");
  var special = prompt("Include special characters");

  if (pwlength >=8){

    if (up.toLowerCase().trim() == "yes" || up.toLowerCase().trim() == "y"){
      var start = Math.random() * (upperrange[1] - upperrange[0]) + upperrange[0];
      var end = start +1;
      password += "" + characters.substring(start, end);
      pwlength--;
    }
    if (low.toLowerCase().trim() == "yes" || low.toLowerCase().trim() == "y"){
      var start = Math.random() * (lowerrange[1] - lowerrange[0]) + lowerrange[0];
      var end = start +1;
      password += "" + characters.substring(start, end); 
      pwlength--;
    }

    if (num.toLowerCase().trim() == "yes" || num.toLowerCase().trim() == "y"){
      var start = Math.random() * (numberrange[1] - numberrange[0]) + numberrange[0];
      var end = start +1;
      password += "" + characters.substring(start, end);
      pwlength--;
    }

    if (special.toLowerCase().trim() == "yes" || special.toLowerCase().trim() == "y"){
      var start = Math.random() * (specialrange[1] - specialrange[0]) + specialrange[0];
      var end = start +1;
      password += "" + characters.substring(start, end);
      pwlength--;
    }
    for (var i =0; i < pwlength; i++){
      var start = Math.random() * (characters.length - 0) + 0;
      var end = start +1;
      password += "" + characters.substring(start, end);
    }
    writePassword();
  }
  else {
    alert("Length must be 8 or more characters");
  }
}
// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());
