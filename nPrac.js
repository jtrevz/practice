function solution(S) {
    let b = 0
    let a = 0
    let n = 0

    let moves = 0

    for (let i = 0; i < S.length; i++) {
        if (S[i]=== 'B') {
            b++
        }
        if (S[i]=== 'A') {
            a++
        }
        if (S[i]=== 'N') {
            n++
        }
    }

    while ( (b >= 0) && (a >= 0) && (n >= 0)) {
        b = b - 1
        a = a - 3
        n = n - 2

        if ((b >= 0) && (a >= 0) && (n >= 0)) {
            moves ++
        }
    }
    return moves
}