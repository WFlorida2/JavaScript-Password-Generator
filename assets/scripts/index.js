
    // These arrays hold different types of characters that can be included in the password.
    var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lowerCasedChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCasedChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    // This function uses confirm dialogs to determine which types of characters the user wants to include in the password. 
    // It returns an object with boolean properties indicating the user's choices.
    function getPasswordOptions() {
        // set options object
        var options = {
            selectedSpecial: confirm("Please click ‘OK’ if you prefer special characters such as \n$ @ % & * ,etc."),
            selectedNumeric: confirm("Please click ‘OK’ if you prefer Numbers."),
            selectedLower: confirm("Please click ‘OK’ if you prefer Lowercase.\nsuch as a,b,c....."),
            selectedUpper: confirm("Please click ‘OK’ if you prefer Uppercase.\nsuch as A,B,C....")
        };

        return options;
    }

    // This function selects a random character from a given array
    function getRandom(arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    // This function where the password is generated
    function generatePassword() {
        // Prompts the user with instructions on how to request password
        alert("You will be given a series of choices to generate a password:\nA - Input the length of required password.\nB - Select at least one set of characters.");
        // Set counter for the number of attepts the user would have to generate a password
        const maxAttempts = 2;
    // Initiate the loop and display prompt to input a number
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            let userInput = prompt("Please enter a number between 8 and 128 (Attempt " + attempt + " of " + maxAttempts + "):");
    // If user cancel at that stage, a prompt is displayed
            if (userInput === null) {
                alert("Password generation cancelled.");
                // Password text box is now displaying what haapened and what user can do next
                return "Password generation process cancelled.\nPlease click on 'Generate Password' button below if you wish to try again";
            }
    // Assign the user choice of the length of passwrd to a variable called num
            const num = Number(userInput);
    // If anything that is entered except between 8 & 128 then alert is displayed
            if (isNaN(num) || num < 8 || num > 128) {
                alert("Invalid input. Number entered not between 8 and 128.");
    // if attempts is equel to 2 then alert user, explain what happened and next steps
                if (attempt === maxAttempts) {
                    alert("Maximum attempts of " + attempt +" is reached. Please try again.");
                    return "Failed to generate password.\nPlease click on 'Generate Password' button below, \nfollow the instructions \nand \ntry again";
                }
                continue;
            }

            let options;
            do {
                options = getPasswordOptions();
    // Verif if user seclected at least one type of char set and if not then display an alert 
                if (!options.selectedSpecial && !options.selectedNumeric && !options.selectedLower && !options.selectedUpper) {
                    alert("Please select at least one character type.");
                }
            } while (!options.selectedSpecial && !options.selectedNumeric && !options.selectedLower && !options.selectedUpper);

            // initialise an empty array named possibleChars and will be used to stote the chosen char where password will be generated
            let possibleChars = [];
            // if statements check the user's preferences for character types and add the corresponding characters to the possibleChars array.
            // concat method is used to combine the arrays without modifying the original arrays.
            if (options.selectedSpecial) possibleChars = possibleChars.concat(specialChar);
            if (options.selectedNumeric) possibleChars = possibleChars.concat(numericChar);
            if (options.selectedLower) possibleChars = possibleChars.concat(lowerCasedChar);
            if (options.selectedUpper) possibleChars = possibleChars.concat(upperCasedChar);

            let generatedPassword = '';
            // for loop runs for a number of iterations equal to num for the desired length of the password entered by the user.
            for (let i = 0; i < num; i++) {
                generatedPassword += getRandom(possibleChars);
            }
            document.getElementById("password").value = generatedPassword;
            return generatedPassword;
        }
    }

    var generateBtn = document.querySelector('#generate');

    // This function  is called when the 'Generate Password' button is clicked. 
    // It retrieves the generated password and displays it
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');
        passwordText.value = password;
    }
    generateBtn.addEventListener('click', writePassword);

