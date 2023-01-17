var findMedianSortedArrays = function(nums1, nums2) {
    let length = nums1.length + nums2.length
    let half = Math.floor(length/2)
    let a
    let b 

    if (nums1.length < nums2.length) {
        a = nums1
        b = nums2
    } else {
        a = nums2
        b = nums1
    }

    let left = 0
    let right = a.length-1
    let median 
    while(!median) {
        let m1 = Math.floor((left + right)/2)
        let m2 = half - m1 - 2

        let aL = (m1 >= 0)? a[m1] : Number.MIN_VALUE
        let aR = (m1+1 <= a.length)? a[m1+1] : Number.MAX_VALUE
        let bL = (m2 >= 0)? b[m2] : Number.MIN_VALUE
        let bR = (m2+1 <= b.length)? b[m2+1] : Number.MAX_VALUE

        console.log (m1)
        console.log(`aL: ${aL} bR: ${bR} bL: ${bL} aR: ${aR}`)
        // if partition is in right place
        if ((aL <= bR) && (bL <= aR)) {
            console.log("in the median if partition in right place")
            //median is odd
            if (length % 2) {
                //partition to the right will return median
                median = Math.min(aR, bR) 
            } else {
                median = (Math.min(aL, bL) + Math.max(aR, bR))/2
            }
        }
        // aL partition is too big--> reduce the size of A --> shift A pointer to i-1
        else if (aL > bR) {
            console.log('else if median')
            right = m1 - 1
        // increase size of left partiion
        } else {
            console.log('else ----- median')
            left = m1 + 1
        }
        median = 1
    }
    return median
};

let hello = [1,2]
let bye = [3,4]

console.log(findMedianSortedArrays(hello, bye))