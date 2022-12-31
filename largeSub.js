// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


function largestSub (string) {
    let currentStr = []
    let longest = 0

    for (let i = 0; i < string.length; i++) {
        const currentPosition = currentStr.indexOf(string[i]);
        console.log(i, currentPosition, currentStr)

        if (currentPosition !== -1) {
            currentStr.splice(0, currentPosition + 1)
            
        }
        
        currentStr.push(string[i]);

        longest =  Math.max(longest, currentStr.length)    
    }
    return longest
}

console.log(largestSub("abcdadawertyui"));

