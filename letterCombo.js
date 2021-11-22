const numberMap = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
])

var letterCombinations = function(digits) {
    if (digits === '') {
        return []
    }
    const result = [];

    const dfs = (i, digits, opt) => {
        let char = numberMap.get(digits[i])
    

        char.map(chars=>{
            opt.push(chars);
            dfs(1+i , digits, opt);
            slate.pop();
        })
    }
    dfs(0, digits, []);

    return result;
};

console.log(letterCombinations('23'));