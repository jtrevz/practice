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
    if(counter1 < l1.length) {
        mergedList.push(l1[counter1])
            counter1++
    }
    if(counter2 < l2.length) {
        mergedList.push(l2[counter2])
            counter2++
    }
    return mergedList
}

console.log(mergeTwo([1,2,4], [1,3,4]));
console.log(mergeTwo([],[]));
console.log(mergeTwo([],[0]));

let mergedNode = (l1,l2) => {
    let mergedList = new NodeList;
    
    while(l1 && l2) {
        if (l1.val < l2.val) {
            mergedList.next = l1
            l1 = l1.next
        } else{
            mergedList.next = l2
            l2 = l2.next
        }
        mergedList = mergedList.next;
    }
    if(l1) {
        mergedList.next = l1
    }
    if(l2) {
        mergedList.next = l2
    }
    return mergedList 
}


