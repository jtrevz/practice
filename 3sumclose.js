

var threeSumClosest = function(nums, target) {
    if (nums.length === 3) {
        return nums.reduce((a,b)=> a + b, 0)
    }

    nums.sort(function(a, b) {return (a-b)})
    let closestSum;

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const tempRes = nums[i] + nums[r] + nums[l];
            let diff = target - tempRes
            let diff1 = 0
            if (diff == 0) {
                return tempRes;
            }
            else if ((!closestSum)|| (Math.abs(diff1) > Math.abs(diff))){
                closestSum = tempRes;
                diff1 = diff // leave ++ till later
            } 
            if (diff > 0) {
                r--;
            } else if (diff < 0) {
                l++;
            }
        }
    }

    return closestSum

};

console.log(threeSumClosest([-1,2,1,-4], 1));