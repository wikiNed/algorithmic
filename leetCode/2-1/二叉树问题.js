class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//广度优先搜索 时间复杂度是 O(N) 空间复杂度：O(W)
function findLeftMostNodes(root) {
    if (!root) return [];

    const result = [];
    const queue = [root]; // 使用数组模拟队列
    // console.log(queue);

    while (queue.length > 0) {
        const levelSize = queue.length;
        console.log(levelSize);
        console.log(queue);
        let leftMostNode = null;

        // 遍历当前层的所有节点
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // 从队列中取出一个节点

            // 如果是该层的第一个节点，那么它就是最左侧的节点
            if (!leftMostNode) {
                leftMostNode = node;
            }

            // 将当前节点的左右子节点加入队列
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        // 将当前层最左侧的节点的值添加到结果数组中
        if (leftMostNode) {
            result.push(leftMostNode.value);
        }
    }

    return result;
}

// 示例二叉树
//         1
//      /    \
//     2      3
//    / \    /
//   4   5  8
// /    /
//6    7
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(8);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(6);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(7);
// 输出每一层最左侧的节点
console.log(findLeftMostNodes(root)); // 输出: [1, 2, 4]
