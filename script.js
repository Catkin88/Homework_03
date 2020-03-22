// Assignment Code
var generateBtn = document.querySelector("#generate");
const characterRange = document.getElementById("characterRange")
const characterNumber = document.getElementById("characterNumber")
const includeUppercaseElement= document.getElementById("includeUppercase")
const includeNumbersElement= document.getElementById("includeNumbers")
const includeSymbolsElement= document.getElementById("includeSymbols")

characterNumber.addEventListener("input",synccharacterAmount)
characterRange.addEventListener("input",synccharacterAmount)

function synccharacterAmount(e){
    const value = e.target.value
    characterRange.value= value
    characterNumber.value= value
   }
// Write password to the #password input


PasswordGeneratorForm.addEventListener("submit", e=> {
    event.preventDefault()
    const chararcterAmount= chararcterAmount.value
    const includeUppercase= includeUppercaseElement.checked
    const includeNumbers= includeNumbersElement.checked
    const includeSymbols= includeSymbolsElement.checked
    const password= generatePassword(chararcterAmount, includeUppercase, includeNumbers,includeSymbols)
    
})

const LOWERCASE_CHAR_CODES= arrayFromLowtoHigh (65, 90)
const UPPERCASE_CHAR_CODES= arrayFromLowtoHigh (97, 122)
const NUMBER_CHAR_CODES= arrayFromLowtoHigh (48,57)
const SYMBOL_CHAR_CODES= arrayFromLowtoHigh (33,47).concat(arrayFromLowtoHigh(58,64).concat(arrayFromLowtoHigh(91,96).concat(arrayFromLowtoHigh(123,126))).concat())

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
// Add event listener to generate button

