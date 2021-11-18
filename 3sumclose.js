// var threeSum = function(nums) {
//     if (nums == []) {
//         return solution
//     }
    
//     nums.sort(function(a, b) {return (a-b)})
//     let solution = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (nums[i] != nums[i - 1]) {
//             let l = i + 1;
//             let r = nums.length - 1;

//             while (l < r) {
//                 console.log(nums[i], nums[l],  nums[r]);
//                 const tempRes = nums[i] + nums[l] + nums[r];
//                 console.log(tempRes);
//                 if (tempRes === 0) {
//                     solution.push([nums[i], nums[l], nums[r]])
//                     while(nums[r] == nums[r - 1]) {
//                         r--;
//                     }
//                     while(nums[l] == nums[l + 1]) {
//                         l++;
//                     }
//                     r--;
//                     l++;
//                 }
//                 else if (tempRes < 0) {
//                     l++
//                 }
//                 else if (tempRes > 0) {
//                     r--;
//                 }
//             }
//         }
//     }
//     return solution;
// };

var threeSumClosest = function(nums, target) {
    let closestSum = 0;

    if (nums.length === 3) {
        return nums.reduce((a,b)=> a + b, 0)
    }

    nums.sort(function(a, b) {return (a-b)})

    
};
