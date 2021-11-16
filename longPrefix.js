var longestCommonPrefix = function(strs) {
    if (!strs.length) return '' //return early * might make processing much faster


    //below calculates each letter/charac of string in first position
    for (let i = 0; i < strs[0].length; i++) {
        if (!strs.every((piece) => piece[i] === strs[0][i])){
            return strs[0].slice(0,i)
            //every evaluates each piece(string) and the position of character to see if they match
        }
    }
    return strs[0];
}

console.log(longestCommonPrefix(["flower","flow","flight"]))