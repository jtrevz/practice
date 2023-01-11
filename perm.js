function solution(A) {
    // Implement your solution here
    let seq = {};
    for(let i = 0; i< A.length; i++) {
        seq[A[i]] = 1
    }
    console.log(seq)
    console.log(parseInt(Object.keys(seq)))
    // for (let x = (Object.keys(seq[1]))+ 1; x<= A.length; x++) {
    //     // console.log(x)
    //     if (seq[x] != 1) {
    //         return 0
    //     }
    // }
    // return 1
}

console.log(solution([4,2,3,5,1,0]))

// console.log(solution([1,4,2]))