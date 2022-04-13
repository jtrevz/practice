let isValid = function(s) {
    let pArray = s.split('')
    let i = 0;
    let stack = [];

    while(i < pArray.length) {
        stack.push(pArray[i])
        i++;
    }

    let open = slack[slack.length - 2];
    let closed = slack[slack.length - 1];


    
}

console.log(isValid("()"))

console.log(isValid("()[]{}"))
console.log(isValid("(]"))