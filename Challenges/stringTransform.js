const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to transform the string based on the rules
function transformString(input) {
    const length = input.length;
    let result = '';

    // Check if the length is divisible by 3
    if (length % 3 === 0) {
        // Reverse the entire string
        result = input.split('').reverse().join('');
    }

    // Check if the length is divisible by 5
    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // Check if the length is divisible by both 3 and 5
    if (length % 3 === 0 && length % 5 === 0) {
        // Perform both operations in the specified order
        result = input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    // Return the transformed string
    return result || input; // If none of the conditions are met, return the original string
}

// Prompt the user to enter words
rl.question("Enter a word or phrase: ", function(userInput) {
    // Transform the user input
    const transformedString = transformString(userInput);

    // Display the transformed string
    console.log(transformedString);

    rl.close();
});
