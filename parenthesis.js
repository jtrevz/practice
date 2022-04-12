let isValid = function(s) {
    let pArray = s.split('')
    let i = 0;
    let stack = [];

    while(i < pArray.length) {
        stack.push(pArray[i])
    }

    
}

console.log(isValid("()"))

console.log(isValid("()[]{}"))
console.log(isValid("(]"))