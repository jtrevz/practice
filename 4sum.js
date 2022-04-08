let fourSum = function (nums, target) {
    let solution = [];

    //sort  
    nums.sort(function(a,b) {return (a-b)})

    for(let i = 0; i < nums.length -2; i++) {
        //counters
        if(nums[i] != nums[i - 1]) {
            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const difference = target - (nums[i] + nums [l] + nums [r]);
                const n = nums.indexOf(difference, (l+1))
                if(0 < n < r) {
                    solution.push([nums[i], nums[l], nums[n], nums [r]])
                    while(nums[r] == nums[r - 1]) {
                        r--;
                    }
                    while
                }
            }
        }
        //while

            //if(tempRes = target)
    }
    
    return solution
};