

function reverse(x) {
    let num = parseInt(x.toString().split('').reverse().join(''))
    return num > 0x7FFFFFFF ? 0 : Math.sign(x) * num
}

console.log(reverse(-872324321))