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
        console.log(`Round: ${i}, ${cVal}, ${nVal}, ${(singleRom[(i + 1)])}`);

        if (cVal > nVal) {
            console.log(`Greater:  ${cVal}, ${nVal}`)
            result += (cVal - nVal);
            i--;
            console.log(result, `Ending: ${i}`);

        } else if (cVal < (singleRom[(i + 1)])) {
            result -= cVal
            ("current minus")
        }
        else {
            console.log(`Normal:  ${cVal}, ${nVal}`)
            if (nVal) {
                result += (cVal + nVal) 
                i--;
                console.log((`Next Num exists ${result}, ${i} `))
            } else {
                result += cVal
                console.log((`NO NEW NUM ${result}, ${i} `))
            }
            // nVal ? result += (cVal + nVal) : result += cVal
            // i--;
        } 
    }
    return result
}

console.log(romanToInt("MCDLXXVI"))