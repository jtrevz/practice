// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

// Example 1:

// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.


var sumNumbers = function (root) {
    return sum(0, root);

}

const dfs = (node) => { 
    
    stack.push(node);
    while (!stack.isEmpty()) {
       node = stack.pop();
       if (visited[node] == false) {
          visited[node] = true;
          console.log(`we visited ${node}`)
          for (let j = 0; j < graphAdj[node].length; j++) {
             if (graphAdj[node][j] === 1){
                 stack.push(j);
              }
           }
      }
    }
}


console.log(dfs([1,2,3]));