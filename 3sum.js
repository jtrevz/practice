// let nums = [-1,0,1,2,-1,-4];
// let nums1 = [0];

// const equal = (a,b) => {
//     a.every((v, r) => v === b[r])
// }

// var threeSum = function (nums) {
//     let solution = [];

//         if (nums == []) {
//         return solution
//     }

//     for (var i = 0; i < nums.length; i++) {
        
//         let x = (nums[i]) * -1;

//         for (let j = i + 1; j < nums.length; j++) {
//             let tempArray = []
//             let y = nums[j];
//             let z = nums[j + 1];

//             if (((y + z) == x)) {
//                 tempArray.push((nums[i]), y, z);
//                 tempArray.sort();
//                 if (!(solution.find(array => array.every(function(e, index){
//                     return e === tempArray[index]
//                 })))) {
//                     solution.push(tempArray);
//                 }
//             }
//         }

//     }
//     return solution;
// }



var threeSum = function(nums) {
    if (nums == []) {
        return solution
    }
    
    nums.sort(function(a, b) {return (a-b)})
    let solution = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] != nums[i - 1]) {
            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                console.log(nums[i], nums[l],  nums[r]);
                const tempRes = nums[i] + nums[l] + nums[r];
                console.log(tempRes);
                if (tempRes === 0) {
                    solution.push([nums[i], nums[l], nums[r]])
                    while(nums[r] == nums[r - 1]) {
                        r--;
                    }
                    while(nums[l] == nums[l + 1]) {
                        l++;
                    }
                    r--;
                    l++;
                }
                else if (tempRes < 0) {
                    l++
                }
                else if (tempRes > 0) {
                    r--;
                }
            }
        }
    }
    return solution;
};


console.log(threeSum([-1,0,1,2,-1,-4]));