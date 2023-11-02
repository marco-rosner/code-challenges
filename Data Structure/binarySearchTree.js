var Node = require("./node")

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        var newNode = new Node(data)
        
        this.root === null ? this.root = newNode : this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            node.left === null ? node.left = newNode : this.insertNode(node.left, newNode) 
        } else {
            node.right === null ? node.right = newNode : this.insertNode(node.right, newNode)
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, data) {
        if(node == null) return null

        if(data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }

        if(data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }

        // reording
        if(node.left === null && node.right === null){
            node = null
            return node
        }

        if(node.left === null) {
            node = node.right
            return node
        }

        if(node.right === null) {
            node = node.left
            return node
        }

        var aux = this.findMinNode(node.right)
        node.data = aux.data

        node.right = this.removeNode(node.right, aux.data)
        return node
    }

    // Transversal
    inOrder(node) {
        if(node !== null) {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }

    preOrder(node) {
        if(node !== null) {
            console.log(node.data)
            this.inOrder(node.left)
            this.inOrder(node.right)
        }
    }

    posOrder(node) {
        if(node !== null) {
            this.inOrder(node.left)
            this.inOrder(node.right)
            console.log(node.data)
        }
    }

    // Helpers
    findMinNode(node) {
        if(node.left == null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    getRootNode() {
        return this.root
    }

    search(node, data){
        if(node == null) return null

        if(data < node.data) return this.search(node.left, data)

        if(data > node.data) return this.search(node.right, data)

        return node
    }
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 

var root = BST.getRootNode()

BST.inOrder(root) // 5 7 9 10 13 15 17 22 25 27

BST.remove(5)

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17 

var root = BST.getRootNode()

BST.inOrder(root) // 7 9 10 13 15 17 22 25 27

BST.remove(7)

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17 

var root = BST.getRootNode()

BST.inOrder(root) // 9 10 13 15 17 22 25 27

BST.posOrder(root) // 9 10 13 17 22 25 27 15

BST.preOrder(root) // 15 9 10 13 17 22 25 27 