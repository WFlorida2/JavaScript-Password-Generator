// Array of special characters to be included in password
var specialChar = 
['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedChar = 
['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedChar = 
['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Get references to the #generate element
// This variable (generateBtn)target generate id (#generate) , the generate password button in the html file 
var generateBtn = document.querySelector('#generate');
// Function to prompt user for password options
function getPasswordOptions() 
{

}

// Function for getting a random element from an array
function getRandom(arr) 
{

}

// Function to generate password with user input
function generatePassword() 
{
  instructions = alert ("Hello, you will be presented with a series of choices \nto generate a password as per your preferences.");

  const maxAttempts = 2;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) 
    {
    let userInput = prompt("Please enter a number between 8 and 128 (Attempt " + attempt + " of " + maxAttempts + "):");

    const num = Number(userInput);

    if (!isNaN(num) && num >= 8 && num <= 128) 
    {} else 
    {
        alert("You did not input a number or entered an invalid number, \nPlease try again by entering only numbers between 8 & 128");
    }

    if (attempt === maxAttempts) 
    {
        // alert("Maximum attempts of 2 tries reached. Please try again.");
        return "Maximum attempts of 2 tries reached. Please try again.";
        break;  // Exit the loop after the final attempt
    }
    
    }
  }







    // if (confirm ("Please click ‘OK’ if you prefer special characters \nsuch as $ @ % & * ,etc."))
    // {
    //   // console.log("User wants special Chars");
    // } else 
    // {
    //   // console.log("No special characters");
    // }

    // if (confirm (" Please click ‘OK’ if you prefer Numeric"))
    // {
    //   // console.log("User wants numeric Chars");
    // } else 
    // {
    //   // console.log("No numeric characters");
    // }

    // if (confirm (" Please click ‘OK’ if you prefer Lowercase"))
    // {
    //   // console.log("User wants lowercase Chars");
    // } else 
    // {
    //   // console.log("No lowercase characters");
    // }

    // if (confirm (" Please click ‘OK’ if you prefer Uppercase"))
    // {
    //   // console.log("User wants uppercase Chars");
    // } else 
    // {
    //   // console.log("No uppercase characters");
    // }

// }





  // The returning password value will be in here
  // return "generated password will go here";
// Write password to the #password input
function writePassword() {
  // Where the generated password will be displayed in the card on the screen
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  // This takes the value from the generated password and display it on the screen
  passwordText.value = password;
}

// Add event listener to generate button
// Once 'Generate Password button is clicked then it call 'writePassword' function
generateBtn.addEventListener('click', writePassword);