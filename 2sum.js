var twoSum = function(nums, target) {
    let returnArray = [];
    for (let i=0; i < nums.length; i++) {
        let tempOne = nums[i]
        for (let j = i+1; j < nums.length; j++) {
            if ((tempOne + nums[j]) === target ) {
                returnArray.push(i)
                returnArray.push(j)
                return returnArray
            }
        }
    }
};