class MaxHeap {
    constructor(maxSize) {
        this.arr = new Array(maxSize).fill(null)

        this.maxSize = maxSize

        this.heapSize = 0
    }

    lChild(i) {
        return 2 * i + 1
    }

    rChild(i) {
        return 2 * i + 2
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    showArr() {
        return this.arr
    }

    MaxHeapify(i) {
        const l = this.lChild(i)
        const r = this.rChild(i)
        let largest = i

        if (l < this.heapSize && this.arr[l] > this.arr[i]) largest = l

        if (r < this.heapSize && this.arr[r] > this.arr[largest]) largest = r

        if (largest !== i) {
            const temp = this.arr[i]
            this.arr[i] = this.arr[largest]
            this.arr[largest] = temp
            this.MaxHeapify(largest)
        }
    }

    removeMax() {
        if (this.heapSize <= 0) return null

        if (this.heapSize === 1) {
            this.heapSize = 0
            return this.arr[0]
        }

        const root = this.arr[0]
        this.arr[0] = this.arr[this.heapSize - 1]
        this.heapSize -= 1

        this.MaxHeapify(0)

        return root
    }

    increaseKey(i, newVal) {
        this.arr[i] = newVal

        while (i !== 0 && this.arr[this.parent(i)] < this.arr[i]) {
            const temp = this.arr[i]
            this.arr[i] = this.arr[this.parent(i)]
            this.arr[this.parent(i)] = temp
            i = this.parent(i)
        }
    }

    getMax() {
        return this.arr[0]
    }

    currentSize() {
        return this.heapSize
    }

    deleteKey(i) {
        this.increaseKey(i, Infinity)
        this.removeMax()
    }

    insertKey(value) {
        if (this.heapSize === this.maxSize) {
            console.log("Overflow: Could not insertKey")
            return
        }

        let i = this.heapSize
        this.arr[i] = value

        this.heapSize += 1

        while (i !== 0 && this.arr[this.parent(i)] < this.arr[i]) {
            const temp = this.arr[i]
            this.arr[i] = this.arr[this.parent(i)]
            this.arr[this.parent(i)] = temp
            i = this.parent(i)
        }
    }
}

const h = new MaxHeap(15)

console.log('showArr >', h.showArr())
h.insertKey(3)
console.log('showArr >', h.showArr())
h.insertKey(10)
console.log('showArr >', h.showArr())
h.insertKey(12)
console.log('showArr >', h.showArr())
h.insertKey(8)
console.log('showArr >', h.showArr())
h.insertKey(2)
console.log('showArr >', h.showArr())
h.insertKey(14)
console.log('showArr >', h.showArr())

console.log('getMax >', h.getMax())
console.log('currentSize >', h.currentSize())
console.log('showArr >', h.showArr())

h.deleteKey(2)

console.log('currentSize >', h.currentSize())
console.log('showArr >', h.showArr())

h.insertKey(15)
h.insertKey(5)

console.log('getMax >', h.getMax())
console.log('showArr >', h.showArr())
console.log('currentSize >', h.currentSize())