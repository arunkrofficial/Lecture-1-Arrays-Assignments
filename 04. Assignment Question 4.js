//  ******************************************************Answer**************************************************

function plusOne(digits) {
    const n = digits.length;
  
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit by 1
      digits[i] += 1;
  
      // If the digit becomes 10, set it to 0 and carry over the 1 to the next digit
      if (digits[i] === 10) {
        digits[i] = 0;
      } else {
        // If the digit is less than 10, there's no carry-over, so we can return the updated digits array
        return digits;
      }
    }
  
    // If we reach this point, it means all digits were 9, so we need to add an additional digit of 1 at the beginning
    digits.unshift(1);
  
    return digits;
  }
  
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  