function solution(A) {
    // Implement your solution here
    let pair = new Map()

    for (let i = 0; i < A.length; i++) {
        if(pair.has(A[i])) {
            pair.delete(A[i])
        } else {
            pair.set(A[i], 1)
        }
    }
    let temp = pair.keys()
    return temp.next().value
}

solution([1,2,3,4,5,6,6,5,3,2,1])