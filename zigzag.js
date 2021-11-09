var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let newString = '';

    let key = (numRows * 2) - 2;

    for (let i = 0; i < numRows; i++) {

        for (let x = i; x < s.length; x += key) {
            newString += s[x];

            if ((i != 0 ) && (i != numRows - 1) && (x + key - 2 * i) < s.length) {
                newString += s[x + key - 2 * i];
            }
        }
    }

    return newString 

}


console.log(convert('PAYPALISHIRING', 4))