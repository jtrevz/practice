var twoSum = function(nums, target) {
    let storeHash = {};

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in storeHash) {
            return[i, storeHash[diff]]
        } else {
            storeHash[nums[i]] = i
        }
    };
};

