const numberMap = {
    '2': ['a','b','c'],
    '3' :['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
}

var letterCombinations = function(digits) {
    if (digits === '') {
        return []
    }

    const result = [];

    const dfs = (i, digits, opt) => {
        let character = numberMap[digits[i]]
    
        if (i === digits.length) {
            result.push(opt.join(''))
            return
        }

        for (let char of character) {
            opt.push(char);
            dfs(1 + i , digits, opt);
            opt.pop();
        }
    }
    dfs(0, digits, []);

    return result;
};

console.log(letterCombinations('23'));