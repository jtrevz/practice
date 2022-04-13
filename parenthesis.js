let isValid = function(s) {
    let i = 0;
    let stack = [];
    const key = '() {} []'

    while(i < s.length) {
        stack.push(s[i])
        i++;

        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];

        let compare = open + closed

        if (key.includes(compare)) {
            stack.splice(open, 2)
        }
    }
    return (stack.length === 0)
}

console.log(isValid("()"), )

console.log(isValid("()[]{}"))
console.log(isValid("(]"))