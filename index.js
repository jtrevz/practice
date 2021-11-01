const numsA = [1,1,0,1,1,1]

var findMaxConsecutiveOnes = function(nums) {
    let currentMax = 0;
    // let maxArray = [];
    let max = 0;
    for (let i=0; i < nums.length; i++) {
       if (nums[i] === 1){
           currentMax++
       } else {
         if (currentMax > max) {
             max = currentMax
         }
         currentMax = 0;
       }
        if (currentMax > max) {
             max = currentMax
         }
    }
    return max
};

console.log(findMaxConsecutiveOnes(numsA));

