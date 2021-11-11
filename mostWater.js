var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxiArea = 0

    while (start < end) {
        if (height[start] < height[end]) {
            maxiArea = Math.max(maxiArea, height[start] * (end - start));
            start++;
        } else {
            maxiArea = Math.max(maxiArea, height[end] * (end - start));
            end--;
        }
        return maxiArea
    }
}

console.log(maxArea([1,2,1]));