function solution (A) {
    let right = 0
    let left = 0
    let diff = Number.MAX_VALUE

    for (let i = 0; i < A.length; i++) {
        right += A[i]
        console.log(`first loop ${right}`)
    }

    for (let x = 0; x < A.length; x++) {
        left =+ A[x]
        right =- A[x]
        console.log(left,right)

        if ((Math.abs(left - right)) < diff) {
            diff = Math.abs(left - right)
        }
    }
    return diff
}

console.log(solution([3,1,2,4,3]))