// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


function sortedMedian (nums1, nums2) {
    let mergedArray = nums1.concat(nums2)
    let aLength = mergedArray.length - 1
    mergedArray.sort(function (a, b) { return a-b});

    console.log(mergedArray);

    if (( aLength % 2 ) === 0 ) {
        return mergedArray[(aLength / 2)]
    } 
    else {
        let x = Math.round(aLength / 2)
        return (mergedArray[x] + mergedArray[(x-1)]) / 2
    }
    
}

console.log(sortedMedian([3], [-1 ,-2]))
