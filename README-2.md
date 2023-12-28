# JavaScript-Password-Generator

The web app should do the following:
- Once displayed, Click on ‘Generate a password button,
- The first prompt “ Input Password length: must be between 8 and 128 characters”
- and so on ……..

# Pseudocode:

Using nested functions:

function generatePassword ()
{
Once the generate password button is clicked, it will start a series of prompts to selected criteria but first will display an alert message that says: “ Hello, you will be presented with a series of choices to generate a password as per your preferences.”
Step 0b : No saving required when user clicks ‘ok’

function getPasswrodOptions()
   {

Step 1a : Display a prompt message that says “ Input Password length: must be between 8 and 128 characters”
Step 1b : Validate the length, if okay then Number saved when ‘OK’ button clicked
 Step1c: If not valid number selected then display a message in the card to say “No valid number were chosen. Please click on “Generate Password” button to select at least one set of characters” 
Step 1d: If field left empty then  display a message in the card to say : The length of the password field was left empty. Please click on ‘Generate Password” to enter any value between 8 & 128.

((( ChatGPT : 
js: if user input in a prompt window is not a number between 8 & 128 or any other characters then display message to try again using for loop but not infinite loop
)))


Step 2a: Display a confirm message that says “ Click ‘Ok’ if you prefer special characters”  
Step 2b : Choice of special characters saved when ‘OK’ button clicked

Step 3a: Display a confirm message that says “ Click ‘Ok’ if you prefer Numeric” 
Step 3b : Choice of Numeric saved when ‘OK’ button clicked

Step 4a : Display a confirm message that says “ Please click ‘Ok’ if you prefer Lowercase”
Step 4b : Choice of lowercase saved when ‘OK’ button clicked

Step 5a : Display a confirm message that says “ Click ‘Ok’ if you prefer Uppercase” 
Step 5b : Choice of Uppercase saved when ‘OK’ button clicked

((( ChatGPT :
- What else aside from prompt and alert messages in js
- How to catch the response of 'Ok' button on a confirm message in JS
)))



Step 6 : Validate that at least one character set has been selected.
If no selection, display a message in the card saying “ No characters were chosen. Please click on “Generate Password” button to select at least one set of characters” 
    }
 }

NOTE: To use nested function, use the following example:
function outerFunction() {
    console.log("Inside the outer function");

    function innerFunction() {
        console.log("Inside the inner function");
    }

    innerFunction(); // Calling the inner function inside the outer function
}

outerFunction(); // This will call the outer function, which in turn calls the inner function

Once all acceptance criteria met
function getRandom (arr)

{

}

function writePassword()
{
Step 7 :, the new generated password is displayed with an alert message that you can copy or written on the html page card

Step 8 : Add a copy to clipboard button
		Password copied to clipboard
}


Also, create issues during the build & test and one for Deployment and one for README file

Maybe display what are a sample of the special characters in the confirm message