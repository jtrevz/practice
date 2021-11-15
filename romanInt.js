//opposite of last probs

const romanMap = new Map([
    ['I', 1,],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
])

var romanToInt = function(s) {
    let singleRom = s.split('');
    let result = 0

    for (let i = singleRom.length - 1; i >= 0; i--) {
        let cVal = romanMap.get((singleRom[i]))
        let nVal = romanMap.get((singleRom[(i - 1)]))

        if (cVal > nVal) {
            result += (cVal-nVal)
            i--
        } else {
            result += (cVal + nVal) )
            i--
        } 
    }
    return result
}

console.log(romanToInt('III'))