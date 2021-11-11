var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxiArea = 0

    while (start < end) {
        if (height[start] < height[end]) {
            maxiArea = Math.max(maxiArea, height[start] * (end - start));
            console.log('end is bigger loop' + start , end , maxiArea);
            start++;
        } else {
            maxiArea = Math.max(maxiArea, height[end] * (end - start));
            console.log('start is bigger loop' + start , end , maxiArea);
            end--;
        }
    }
    return maxiArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));