const romanMap = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M']
])

var intToRoman = function(num) {
    let counter = 1;
    let romanNum = '';
    
    while (num > 0) {
        const digit = num % 10;

        if (digit < 4) {
            for (let i = digit; i > 0; i--) {
               romanNum = (romanMap.get(counter) + romanNum)
            }
        } else if (digit === 4) {
            romanNum = ((romanMap.get(counter))+(romanMap.get(counter * 5)) + romanNum)
        } else if (digit === 5) {
            romanNum = (romanMap.get(counter * 5) + romanNum)
        } else if ( digit < 9) {
            for (let i = digit; i > 5; i--) {
                romanNum = (romanMap.get(counter) + romanNum)
            }
            romanNum = (romanMap.get(counter * 5) + romanNum)
        } else {
            romanNum = (romanMap.get(counter)+ romanMap.get(counter * 10) + romanNum)
        }
        num = num/10|0
        counter = counter * 10
    }
    return romanNum
}

console.log(intToRoman(143))