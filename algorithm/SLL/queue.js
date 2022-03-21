class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        var newNode = new Node(value)
        newNode.next = null
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        return this
    }

    // remove and return the front value from the queue
    dequeue() {
        // your code here
        if(this.head == null){
            console.log('this queue is empty...')
            return this
        } 
        else{
            var temp = this.head.value
            this.head = this.nead.next
            return temp
        }
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        
    }

    displayQueue(){
        // your code here
    }
    
    // return the value of the front node without removing from list
    front() {
        // your code ehre
        if(this.head == null){
            console.log('this queue is empty...')
            return this
        }
        else {
            return this.head.value
        }
    }

    // return whether or not a list is empty
    isEmpty() {
        // your code here
        if(this.head == null){
            console.log('this queue is empty...')
            return true
        }
        else{
            return false
        }
    }
}

var q = new SLQueue();
console.log(q.isEmpty());
console.log(q.front());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.displayQueue();
console.log("==================================");
q.dequeue();
q.displayQueue();
console.log("==================================");
console.log(q.front());
console.log(q.isEmpty());