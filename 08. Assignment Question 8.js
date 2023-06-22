//  ******************************************************Answer**************************************************
function findErrorNums(nums) {
    const set = new Set();
    let duplicate, missing;
    
    // Find the duplicate number
    for (let num of nums) {
      if (set.has(num)) {
        duplicate = num;
      } else {
        set.add(num);
      }
    }
    
    // Find the missing number
    for (let i = 1; i <= nums.length; i++) {
      if (!set.has(i)) {
        missing = i;
        break;
      }
    }
    
    return [duplicate, missing];
  }
  
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  