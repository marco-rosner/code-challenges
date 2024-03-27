class Node {
    constructor(key, value, prev = null, next = null) {
        this.key = key
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    insertHead(node) {
        node.next = this.head.next
        node.prev = this.head
        this.head.next.prev = node
        this.head.next = node
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    removeLast() {
        let node = this.tail.prev
        let key = node.key

        this.remove(node)

        return key
    }
}

module.exports = { Node, DoubleLinkedList }