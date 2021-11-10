var isPalindrome = function(x) {
    let int = 0
    let result = 0
    let compare = x

    if (x < 0) {
        return false;
    }

    while (compare) {
        int = compare %10
        result = (result * 10) + int
        compare = compare/10|0
    }
    
    if (result === x ) {
        return true
    }
    else {
        return false
    }
};

console.log(isPalindrome(11211))