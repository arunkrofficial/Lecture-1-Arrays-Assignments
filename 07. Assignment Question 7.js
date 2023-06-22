//  ******************************************************Answer**************************************************
function moveZeroes(nums) {
    let i = 0; // Pointer for non-zero elements
  
    // Iterate through the array
    for (let num of nums) {
      if (num !== 0) {
        nums[i] = num;
        i++;
      }
    }
  
    while (i < nums.length) {
      nums[i] = 0;
      i++;
    }
  }
  
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]
  