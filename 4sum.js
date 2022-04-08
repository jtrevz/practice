// let fourSum = function (nums, target) {
//     let solution = [];

//     //sort  
//     nums.sort(function(a,b) {return (a-b)})

//     for(let i = 0; i < nums.length -2; i++) {
//         //counters
//         if(nums[i] != nums[i - 1]) {
//             let l = i + 1;
//             let r = nums.length - 1;

//             while (l < r) {
//                 const sum = (nums[i] + nums [l] + nums [r])
//                 console.log(`sum: ${sum}`);
//                 const difference = target - sum;
//                 console.log(`differnece: ${difference}`);
//                 let n = nums.indexOf(difference)
//                 console.log(`n: ${n}`);
//                 if((0 < n) && (n < r)) {
//                     console.log(i ,l, n, r);
//                     solution.push([nums[i], nums[l], nums[n], nums [r]])
//                     while(nums[r] == nums[r - 1]) {
//                         r--;
//                     }
//                     while(nums[l] == nums[l + 1]) {
//                         l++
//                     }
//                     r--;
//                     l++;
//                 }
//                 else if (sum < target) {
//                     l++
//                 }
//                 else if (sum > target) {
//                     r--;
//                 }
//             }
//         }
//     }
    
//     return solution
// };

function fourSum(nums, target) {
    const solution = [];

    if (nums.length < 4) return solution

    nums.sort(function(a,b) {return (a-b)})

    console.log(nums);

    for (let i = 0; 1 < nums.length-3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[i+1] + nums [i+2] + nums [i+3] > target) break;
        
        for (let j = i + 1; j < nums.length-2; j++) {
            if (j > i + 1 && nums[j]== nums[j-1]) continue;

            let l = j + 1
            let r = nums.length-1

            while (l < r) {
                const sum = (nums[i] + nums[j] + nums [l] + nums [r]);

                if (sum === target) {
                    solution.push([nums[i], nums[j], nums[l], nums [r]])
                    while(nums[l] == nums[l + 1]) {
                     l++;
                    }
                    l++;
                    while(nums[r] == nums[r - 1]) {
                     r--;
                    }
                    r--;
                } else if (sum < target) {
                    l++;
                } else  {
                    r--;
                }
            }
        }
    } 
    return solution;
}




console.log(fourSum([2,2,2,2,2], 8))

console.log(fourSum([1,0,-1,0,-2,2], 0))