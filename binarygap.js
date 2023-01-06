// fxn to make interger into binary
let numToBinary = (n) =>{
    return(n >>> 0).toString(2)

}

// two for loops outer for left pointer and inner for right
// replace left counter when gap established
let binaryGap = (N) => {
    let temp = numToBinary(N)
    let gap = 0;

console.log(temp)
    for (let i = 0; i < temp.length; i++) {
        for (let x = i + 1; x < temp.length; x++) {
            if (temp[i] == 1 && temp[x] == 1 ) {
                if (gap < (x-i-1)) {
                    gap = (x-i-1)
                }
                i = x
            }
        }
    }
    return gap
} 

console.log(binaryGap(1024))