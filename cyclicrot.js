let shift = (array, n) => {
    let last = array.length - 1
    for (let i = n; i > 0 ; i--) {
        array.splice(0, 0, array[last])
        array.splice(last + 1, 1)
    }
    return array
}

console.log(shift([0,1,2,3], 3))