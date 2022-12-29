var addTwoNumbers = function(l1, l2) {
    // variables for push var, new node list, and result pointer
    let push = 0;
    let current = new ListNode(-1);
    let result = current;

    // while l1,l2,push not null
    while (l1 || l2 || push) {

    // set l1/l2 values into var to next if not null
    let value1 = l1 ? l1.val : 0
    let value2 = l2 ? l2.val : 0

    // capture remainder value of values and push
    let remainder = (value1 + value2 + push) % 10
    // add new node
    current.next = new ListNode(remainder)
    // move pointer
    current = current.next
    // set new l1,l2, and push variable
    push = Math.floor((value1 + value2 + push)/10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    //return result node
    }
    return result.next

    //checking
};