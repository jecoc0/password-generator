// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = [];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = [];
 var passwordText = document.querySelector("#password");

 


 // set up arrays for each data type

 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upperAlpha = alphabet.map(function (alphabet) {
    return alphabet.toUpperCase();
   })
 
 var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 var symbols = ["~", "/", "*", "!", "@", "#", "$", "%", "&", "(", ")"];


  var characterNumber = parseInt(window.prompt("How many characters long should your passwork be? Select a number between 8-129"));
  var lowerSel = window.confirm("Would you like to include lowercase characters in your password?")
  var upperSel = window.confirm("Would you like to include uppercase characters in your password?")
  var numberSel = window.confirm("Would you like to include numbers in your password?")
  var symbolSel = window.confirm("Would you like to include symbols in your password?")
  var superArray = []


  // use conditional statements based on what's returned from prompts to include arrays
  // add selected arrays to super array

    if(lowerSel === true && upperSel === true && numberSel === true && symbolSel === true) {
      superArray = [].concat(numbers,symbols, upperAlpha, alphabet);
      
    } else if (lowerSel === true && upperSel === true && numberSel === true && symbolSel === false) {
      superArray = [].concat(numbers, upperAlpha, alphabet);
      
    } else if (lowerSel === false && upperSel === true && numberSel === true && symbolSel === true) {
      superArray = [].concat(upperAlpha, numbers, symbols);
      
    } else if (lowerSel === true && upperSel === false && numberSel === true && symbolSel === true) {
      superArray = [].concat(alphabet,numbers,symbols);
      
    } else if (lowerSel === true && upperSel === true && numberSel === false && symbolSel === true) {
      superArray = [].concat(alphabet, upperAlpha, symbols);
      
    } else if (lowerSel === true && upperSel === true && numberSel === false && symbolSel === false) {
      superArray = [].concat(upperAlpha, alphabet);
      
    } else if (lowerSel === false && upperSel === true && numberSel === true && symbolSel === false) {
      superArray = [].concat(upperAlpha, numbers);
      
    } else if (lowerSel === true && upperSel === false && numberSel === true && symbolSel === false) {
      superArray = [].concat(alphabet,numbers);
      
    } else if (lowerSel === true && upperSel === false && numberSel === false && symbolSel === true) {
      superArray = [].concat(alphabet,symbols);
      
    } else if (lowerSel === false && upperSel === false && numberSel === true && symbolSel === true) {
      superArray = [].concat(symbols,numbers);
      
    } else if (lowerSel === false && upperSel === true && numberSel === false && symbolSel === true) {
      superArray = [].concat(upperAlpha,symbols);
      
    } else if (lowerSel === true && upperSel === false && numberSel === false && symbolSel === false) {
      superArray = [].concat(alphabet);
      
    } else if (lowerSel === false && upperSel === true && numberSel === false && symbolSel === false) {
      superArray = [].concat(upperAlpha);
      
    } else if (lowerSel === false && upperSel === false && numberSel === true && symbolSel === false) {
      superArray = [].concat(numbers);
      
    } else if (lowerSel === false && upperSel === false && numberSel === false && symbolSel === true) {
      superArray = [].concat(symbols);
      

    } else if (lowerSel === false && upperSel === false && numberSel === false && symbolSel === false) {
      window.prompt("Please refresh the page and select YES for at least one option")
      superArray = [];
    
    } 



  // use a for loop with characterNumber as the amount of times the for loop will run
   for (var i = 0; i < characterNumber; i++) {
    var passwordChar = superArray[Math.floor(Math.random()*superArray.length)]
      
    password.push(passwordChar)
    
  
     }

 
     passwordText.value = password.join('');



  // use a random method to select randomly from the superArray




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









