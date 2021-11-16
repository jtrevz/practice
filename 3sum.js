let nums = [-1,0,1,2,-1,-4];
let nums1 = [0];

var threeSum = function (nums) {
    let solution = [];

    if (nums == []) {
        return solution
    }

    for (var i = 0; i < nums.length; i++) {
        
        let x = (nums[i]) * -1;

        for (let j = i + 1; j < nums.length; j++) {
            let tempArray = []
            let y = nums[j];
            let z = nums[j + 1];

            if ((y + z) == x) {
                tempArray.push(x, y, z)
                solution.push(tempArray)
            }
        }

    }
    return solution;
}