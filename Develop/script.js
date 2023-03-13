// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var password = "";
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
      var start = Math.random(upperrange[0], upperrange[1]);
      var end = start +1;
      password += "" + characters.substring(start, end);
      pwlength--;
    }
    if (low.toLowerCase().trim() == "yes" || low.toLowerCase().trim() == "y"){
      var start = Math.random(lowerrange[0], lowerrange[1]);
      var end = start +1;
      password += "" + characters.substring(start, end); 
      pwlength--;
    }

    if (numb.toLowerCase().trim() == "yes" || numb.toLowerCase().trim() == "y"){
      var start = Math.random(numberrange[0], numberrange[1]);
      var end = start +1;
      password += "" + characters.substring(start, end);
      pwlength--;
    }

    if (special.toLowerCase().trim() == "yes" || special.toLowerCase().trim() == "y"){
      var start = Math.random(specialrange[0], specialrange[1]);
      var end = start +1;
      password += "" + characters.substring(start, end);
      pwlength--;
    }
    for (var i =0; i < pwlength; i++){
      var start = Math.random(0, characters.length-1);
      var end = start +1;
      password += "" + characters.substring(start, end);
    }
    console.log(password);
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
