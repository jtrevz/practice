var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let newString = '';

    let key = (numRows * 2) - 2;

    for (let i = 0; i < numRows; i++) {

        //looping through each row in order and displaced by the key
        for (let x = i; x < s.length; x += key) {
            newString += s[x];


            //takes out first and last fully filled rows, and checks for in between values of steps
            if ((i != 0 ) && (i != numRows - 1) && (x + key - 2 * i) < s.length) {
                newString += s[x + key - 2 * i];
            }
        }
    }

    return newString 

}


console.log(convert('PAYPALISHIRING', 4))