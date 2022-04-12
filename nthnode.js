let input = [1,2,3,4,5];
let n = 2;

let input1 = [1]
let n1 = 1

let input2 = [1,2];
let n2= [1]


let removeNthFromEnd = function(head, n) {
    let removed = head.splice(-n, 1);
    return head
}

console.log(removeNthFromEnd(input, n))

console.log(removeNthFromEnd(input1, n1))
console.log(removeNthFromEnd(input2, n2))