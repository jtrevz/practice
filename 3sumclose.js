

// var threeSumClosest = function(nums, target) {
//     if (nums.length === 3) {
//         return nums.reduce((a,b)=> a + b, 0)
//     }

//     nums.sort(function(a, b) {return (a-b)})
//     let closestSum = 1000000000;

//     for (let i = 0; i < nums.length - 2; i++) {
//         let l = i + 1;
//         let r = nums.length - 1;

//         while (l < r) {
//             const tempRes = nums[i] + nums[r] + nums[l];
//             if (tempRes === target) {
//                 return tempRes;
//             }
//             if (Math.abs(target-tempRes) < Math.abs(target - closestSum)){
//                 closestSum = tempRes;
//             } 

//             if (tempRes > target) {
//                 r--;
//             }
//             else  {
//                 l++;
//             }
//         }
//     }

//     return closestSum

// };

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
            console.log(nums[i], nums[l], nums[r]);
            const diff = target-tempRes
            if (tempRes === target) {
                closestSum = tempRes;
                return closestSum
            }
            if (Math.abs(diff) < Math.abs(target - closestSum)){
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



console.log(threeSumClosest([0,2,1,-3], 1));
