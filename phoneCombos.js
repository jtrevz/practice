const phoneMap = {
    "2": ['a', 'b, c'],
    "3": ['d', 'e', 'f'],
    "4": ['g','h','i'],
    "5": ['j','k','l'],
    "6": ['m','n','o'],
    "7": ['p','q','r','s'],
    "8": ['t','u','v'],
    "9": ['w','x','y','z']
}


let letterCombinations = function(digits) {
    if (digits === '') {
        return []
    }

    const combo = [];

    const dfs = (i, digits, opt) => {
        let char = phoneMap[digits[i]]

        if (!char) return []
        console.log(char);

        for(let x = 0; x < char.length; x++) {
            opt.push(char[i])
            dfs(1 + i, digits, opt) 
        }
    }
}



