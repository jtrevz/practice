var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = [];

    for (let i = 0; i < s.length; i++) {
        let pointer = current.indexOf(s[i])

        if (pointer !== -1) {
            current.splice(0, (pointer + 1))
        }

        current.push(s[i])

        longest = Math.max(longest, current.length)
    }
    return longest
};

console.log(lengthOfLongestSubstring("abcdadawertyui"))
