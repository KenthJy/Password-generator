// The Characters
const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={[}],|:;<>.?/"
};

//Shows length of the password
let myChacLength = document.getElementById('character-length');

//inputs for the user to select checked
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');

// Left col buttons ---> + - generate
const incrementor = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const generator = document.getElementById('generate');

//display the passwords generated
const passwordDisplayOne = document.getElementById('password-one');
const passwordDisplayTwo = document.getElementById('password-two');

//copy buttons
const copyPasswordOne = document.querySelector('.copy-one')
const copyPasswordTwo = document.querySelector('.copy-two')

let theCharacter = 0;

let colorGray = document.getElementById("color-gray")
let colorGreen = document.getElementById("color-green")
let colorRed = document.getElementById("color-red")

if (theCharacter > 10) {
    colorRed.style.backgroundColor = "red"; // Strong password
} else if (theCharacter >= 6) {
    colorGreen.style.backgroundColor = "green"; // Medium password
} else if (theCharacter >= 1) {
    colorGray.style.backgroundColor = "gray"; // Short password
}

//increment and decrement
incrementor.addEventListener("click", function() {
    if (theCharacter < 15) {
        theCharacter++;
        myChacLength.textContent = theCharacter;
    } else {
        alert("Only 15 Max Character");
    }
});

decrement.addEventListener("click", function() {
    if (theCharacter > 0) {
        theCharacter--;
        myChacLength.textContent = theCharacter;
    } else {
        alert("Invalid");
    }
});

generator.addEventListener('click', function() {
    if (theCharacter === 0) {
        alert("Character length must be greater than 0");
        return;
    }
//checker of inputs if checked
    let selectedCharacters = "";

    if (includeUppercase.checked) {
        selectedCharacters += characters.uppercase;
        colorGray.style.backgroundColor = "#9CDBA6";
    }
    if (includeLowercase.checked) {
        selectedCharacters += characters.lowercase;
        colorGreen.style.backgroundColor = "#50B498"
    }
    if (includeNumbers.checked) {
        selectedCharacters += characters.numbers;
        colorRed.style.backgroundColor = "#468585"
    }
    if (includeSymbols.checked) {
        selectedCharacters += characters.symbols;
        colorRed.style.backgroundColor = "#468585"
    }
    if (selectedCharacters === "") {
        alert("Please select at least one character type.");
        return;
    }

   // Generate the passwords
   let thePasswordOne = "";
   let thePasswordTwo = "";

   for (let i = 0; i < theCharacter; i++) {
       let randomIndexOne = Math.floor(Math.random() * selectedCharacters.length);
       let randomIndexTwo = Math.floor(Math.random() * selectedCharacters.length);
       thePasswordOne += selectedCharacters[randomIndexOne];
       thePasswordTwo += selectedCharacters[randomIndexTwo];
   }

   passwordDisplayOne.value = thePasswordOne;
   passwordDisplayTwo.value = thePasswordTwo;
});




//This one idk I copied pasted in in chat gpt since my code is not working XDDDDDDDDDDD
// Copy password to clipboard for Password 1 using Clipboard API
copyPasswordOne.addEventListener('click', function() {
    if (passwordDisplayOne.value) {
        navigator.clipboard.writeText(passwordDisplayOne.value)
            .then(() => {
                alert("Password copied to clipboard: " + passwordDisplayOne.value);
            })
            .catch(err => {
                console.error('Failed to copy password: ', err);
            });
    } else {
        alert("No password to copy!");
    }
});

// Copy password to clipboard for Password 2 using Clipboard API
copyPasswordTwo.addEventListener('click', function() {
    if (passwordDisplayTwo.value) {
        navigator.clipboard.writeText(passwordDisplayTwo.value)
            .then(() => {
                alert("Password copied to clipboard: " + passwordDisplayTwo.value);
            })
            .catch(err => {
                console.error('Failed to copy password: ', err);
            });
    } else {
        alert("No password to copy!");
    }
});