let mergeTwo = (l1, l2) => {
    let mergedList = [];
    let counter1 = 0;
    let counter2 = 0;
    
    while(l1[counter1] && l2[counter2]) {
        if (l1[counter1] < l2[counter2]) {
            mergedList.push(l1[counter1])
            counter1++
        } else{
            mergedList.push(l2[counter2])
            counter2++
        }
    }
    return mergedList
}

console.log(mergeTwo([1,2,4], [1,3,4]));
console.log(mergeTwo([],[]));
console.log(mergeTwo([],[0]));