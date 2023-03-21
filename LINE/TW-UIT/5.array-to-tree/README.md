# Array to Tree

Given a binary tree `[3,9,1,null,null,7,17]` represent by array:

```txt
  3
 / \
9   1
   / \
  7  17
```

and a TreeNode function:

```js
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
```

write a function which transfer array into binary tree.

input: {Array}  
output: {TreeNode} root

**Solution:**

```js
// solution.js

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function arrayToBinaryTree(array) {
  function traverse(node, i) {
    if (i < array.length) {
      node = new TreeNode(array[i]);
      node.left = traverse(node.left, 2 * i + 1);
      node.right = traverse(node.right, 2 * i + 2);
    }
    return node;
  }

  return traverse(new TreeNode(), 0);
}


const tree = arrayToBinaryTree([3,9,1,null,null,7,17]);
console.log('tree :>> ', tree);
```

## Reference

<https://ujjwalkrgupta.medium.com/convert-array-to-complete-binary-tree-c0fdd8d235fa>
