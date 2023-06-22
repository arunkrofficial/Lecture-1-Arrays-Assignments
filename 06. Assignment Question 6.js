//  ******************************************************Answer**************************************************
function containsDuplicate(nums) {
    const set = new Set();
  
    for (let num of nums) {
      // If the value is already in the set, it appears at least twice
      if (set.has(num)) {
        return true;
      }
  
      // Add the value to the set
      set.add(num);
    }
  
    // No duplicate values found
    return false;
  }
  
  const nums = [1, 2, 3, 1];
  const result = containsDuplicate(nums);
  console.log(result); // Output: true
  