// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterRange = document.getElementById("characterRange")
var characterNumber = document.getElementById("characterNumber")
var includeUppercaseElement=getElementById("includeUppercase")
var includeNumbersElement=getElementById("includeNumbers")
var includeSymbolsElement=getElementById("includeSymbols")


var passwordDisplay=getElementById("passwordDisplay")
var form= document.getElementById("PasswordGeneratorForm")

var LOWERCASE_CHAR_CODES= arrayFromLowtoHigh (65, 90)
var UPPERCASE_CHAR_CODES= arrayFromLowtoHigh (97, 122)
var NUMBER_CHAR_CODES= arrayFromLowtoHigh (48,57)
var SYMBOL_CHAR_CODES= arrayFromLowtoHigh (33,47).concat(arrayFromLowtoHigh(58,64).concat(arrayFromLowtoHigh(91,96).concat(arrayFromLowtoHigh(123,126))).concat())

characterNumber.addEventListener("input",synccharacterAmount)
characterRange.addEventListener("input",synccharacterAmount)

form.addEventListener("#generate", event=> {
    event.preventDefault()
    var chararcterAmount= chararcterAmount.value
    var includeUppercase= includeUppercaseElement.checked
    var includeNumbers= includeNumbersElement.checked
    var includeSymbols= includeSymbolsElement.checked
    var password= generatePassword(chararcterAmount, includeUppercase, includeNumbers,includeSymbols)
    
})

function generatePassword(chararcterAmount,includeUppercase,includeSymbols,includeNumbers){
    
    let charCodes= LOWERCASE_CHAR_CODES
    if(includeUppercase) charCodes= charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes= charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes= charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for(let i= 0; i < chararcterAmount; i++) {
        const characterCode= charCodes[Math.floor(Math.random()* chararcterAmount)]
        passwordCharacters.push(String.fromCharCode(characterCode))
   passwordCharacters.push(character)
    }
    return passwordCharacters.join("")
}

function arrayFromLowtoHigh(low,high) {
    for (let i =low; i <= high; i++){
     array.push(i)
    }
    return array
}

function synccharacterAmount(e){
 const value = e.target.value
 characterRange.value= value
 characterNumber.value= value
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

