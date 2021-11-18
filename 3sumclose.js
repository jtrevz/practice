

var threeSumClosest = function(nums, target) {
    if (nums.length === 3) {
        return nums.reduce((a,b)=> a + b, 0)
    }

    nums.sort(function(a, b) {return (a-b)})
    let closestSum = 1000000000;

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const tempRes = nums[i] + nums[r] + nums[l];
            if (tempRes === target) {
                return tempRes;
            }
            if (Math.abs(target-tempRes) < Math.abs(target - closestSum)){
                closestSum = tempRes;
            } 

            if (tempRes > target) {
                r--;
            }
            else  {
                l++;
            }
        }
    }

    return closestSum

};



console.log(threeSumClosest([-1,2,1,-4], 1));