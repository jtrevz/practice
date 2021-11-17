let nums = [-1,0,1,2,-1,-4];
let nums1 = [0];

const equal = (a,b) => {
    a.every((v, r) => v === b[r])
}

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

            if (((y + z) == x)) {
                tempArray.push((nums[i]), y, z);
                tempArray.sort();
                let hi = ((solution.map(array => array.every(function(element, index) { 
                    return element === tempArray[index]
                }) )));
                console.log(hi);
                solution.push(tempArray);
                // }


            }
        }

    }
    return solution;
}


console.log(threeSum([0,0,-1,1]));