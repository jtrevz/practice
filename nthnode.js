let input = [1,2,3,4,5];
let n = 2;

let input1 = [1]
let n1 = 1

let input2 = [1,2];
let n2= [1]


let removeNthFromEnd = function(head, n) {
    return head.splice((head.length),1)
}