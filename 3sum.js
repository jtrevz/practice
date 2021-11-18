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



var threeSum = function(array) {
    array.sort(function(a, b) {return (a-b)})
    console.log(array);
    let solution = [];

    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] != array[i - 1]) {
            let l = i + 1;
            let r = array.length - 1;
            console.log(i, l, r);

            // while (left < right)
        }
    }
};


console.log(threeSum([-1,0,1,2,-1,-4]));