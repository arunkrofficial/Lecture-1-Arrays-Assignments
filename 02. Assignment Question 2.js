//  ******************************************************Answer**************************************************

function removeElement(nums, val) {
    let k = 0; // Variable to track the count of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i]; // Replace element at index k with the element at index i
        k++; // Increment k to count the non-val elements
      }
    }
  
    return k; // Return the count of elements not equal to val
  }
  
  const nums = [3, 2, 2, 3];
  const val = 3;
  
  const k = removeElement(nums, val);
  console.log(k); // Output: 2
  console.log(nums.slice(0, k)); // Output: [2, 2]
  