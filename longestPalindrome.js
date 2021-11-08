// Given a string s, return the longest palindromic substring in s.

//

function longestPalindrome (string) {

    let start = 0;
    let maxLength = 1;
    let len = string.length;
    let beg;
    let end;

    for (let i = 1; i < len; i++) {
        beg = i - 1;
        end = i;

        while (beg >= 0 && end < len && string[beg] == string[end]) {
            beg--;
            end++;
        }

        beg++;
        end--;
        
        if (string[beg] == string[end] && ((end - beg) + 1) > maxLength) {
            start = beg;
            maxLength = ((end - beg) + 1)
        }


        beg = i - 1;
        end = i + 1;
        while (beg >= 0 && end < len && string[beg] == string[end]) {
            beg--;
            end++;
        }

        beg++;
        end--;

        if (string[beg] == string[end] && ((end - beg) + 1) > maxLength) {
            start = beg;
            maxLength = ((end - beg) + 1)
        }
    }
    return string.slice(start, (start + maxLength))
}


console.log(longestPalindrome('carrac'))