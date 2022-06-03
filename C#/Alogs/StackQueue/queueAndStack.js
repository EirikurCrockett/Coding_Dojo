class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack {
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value) {
        var newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        return this;
    }

    // remove and return the top value
    pop() {
        // if there's nothing in the stack, then what?
        if (!this.top) {
            console.log("This stack is empty!")
            return null;
        }
        var removed = this.top
        this.top = this.top.next
        return removed.value
    }

    size(){
        var runner = this.head;
        var count = 0;
        while (runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }
    isEmpty(){
        if(this.head == null)
        {
            return true
        }
        else
        {
            return false
        }
    }
}
// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue {
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        var newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
        return this;
    }

    // remove and return the front value from the queue
    dequeue() {
        if (!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        if (!this.head) {
            return false;
        }
        var runner = this.head;
        while (runner) {
            if (runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    displayQueue() {
        if (!this.head) {
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while (runner) {
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }

    size() {
        var runner = this.head;
        var count = 0;
        while (runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }
}

class TwoSQ{
    constructor(){
        this.placeStack = new SLStack()
        this.queueStack = new SLStack()
    }

}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
console.log(q.isPalindrome()); // should print out true
q.displayQueue();

var q2 = new SLQueue();
q2.enqueue(1);
q2.enqueue(2);
q2.enqueue(3);
q2.enqueue(3);
q2.enqueue(2);
console.log(q2.isPalindrome()); // should print out false
q2.displayQueue();
