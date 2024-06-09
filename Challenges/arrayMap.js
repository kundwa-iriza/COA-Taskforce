const readline = require('readline');

const rln = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a contiguous subarray with target sum exists
function hasContiguousSubarray(array, target) {
    let initial = 0;
    let currentSum = 0;
    
    for (let end = 0; end < array.length; end++) {
        currentSum += array[end];
        
        while (currentSum > target) {
            currentSum -= array[initial];
            initial++;
        }
        
        //Checking whether the sum is
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

// Ask the user to enter the array elements
rln.question("Enter the array elements separated by commas (e.g., 4,2,7,1,9,5): ", function(inputArray) {
    const arr = inputArray.split(',').map(Number);

    // Ask the user to enter the target sum
    rln.question("Enter the target sum: ", function(inputTarget) {
        const target = parseInt(inputTarget);

        // Check if a contiguous subarray with target sum exists
        const result = hasContiguousSubarray(arr, target);

        // Display the result as boolean
        console.log(result);

        rln.close();
    });
});
