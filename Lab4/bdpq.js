class BiDirectionalPriorityQueue {
    constructor() {
        this.deque = [];
        this.data = [];
    }

    enqueue(item, priority) {
        const entry = { item, priority };
        this.deque.push(entry);
        this.data.push(entry);
    }

    peek(mode) {
        if (this.data.length === 0) return null;

        if (mode === "highest") {
            return this.data.reduce((max, el) => el.priority > max.priority ? el : max);
        }

        if (mode === "lowest") {
            return this.data.reduce((min, el) => el.priority < min.priority ? el : min);
        }

        if (mode === "oldest") {
            return this.deque[0];
        }

        if (mode === "newest") {
            return this.deque[this.deque.length - 1];
        }

        throw new Error("Invalid mode");
    }

    dequeue(mode) {
        if (this.data.length === 0) return null;

        let element;

        if (mode === "highest") {
            element = this.data.reduce((max, el) => el.priority > max.priority ? el : max);
        }

        else if (mode === "lowest") {
            element = this.data.reduce((min, el) => el.priority < min.priority ? el : min);
        }

        else if (mode === "oldest") {
            element = this.deque.shift();
            this.data = this.data.filter(e => e !== element);
            return element;
        }

        else if (mode === "newest") {
            element = this.deque.pop();
            this.data = this.data.filter(e => e !== element);
            return element;
        }

        else {
            throw new Error("Invalid mode");
        }

        this.data = this.data.filter(e => e !== element);
        this.deque = this.deque.filter(e => e !== element);

        return element;
    }
}

module.exports = BiDirectionalPriorityQueue;