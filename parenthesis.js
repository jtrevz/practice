let isValid = function(s) {
    let pArray = s.split('')
    for (let i = 0; i < pArray.length; i++) {
        if (pArray[i]=== '(' && pArray[i+1] !== ')') {
            return false
        }
        if (pArray[i]=== '[' && pArray[i+1] !== ']') {
            return false
        }
        if (pArray[i]=== '{' && pArray[i+1] !== '}') {
            return false
        }
        else return true
    }
}

console.log(isValid("()"))

console.log(isValid("()[]{}"))
console.log(isValid("(]"))