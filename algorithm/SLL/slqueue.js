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
    // similar to SLL - add to back
    enqueue(value) {
        var newNode = new Node(value);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return this;
    }

    // remove and return the front value from the queue
    // similar to SLL - remove from front
    dequeue() {
        if(!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;
    }

    //return true/false based on whether you find the given value in a queue
    // same as contains in SLL
    contains(value) {
        if(!this.head) {
            return false;
        }
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        if(this.head == null){
            console.log("Nothing in this queue!")
            return null
        }

        var runner = this.head;
        var min = runner.value;

        while(runner != null){
            if(runner.value < min){
                min = runner.value
            }
            runner = runner.next
        }

        runner = this.head;
        // if the min is at the front
        if(runner.value == min) {
            this.dequeue();
        }
        // if the min is in the queue
        while(runner.next.next != null){
            if(runner.next.value === min){
                runner.next = runner.next.next
                return this;
            }
            else{
                runner = runner.next
            }
        }
        // if the min is at the end of the queue
        if(runner.next.value == min){
            this.tail = runner
            runner.next == null
        }
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }
    
    // return the value of the front node without removing from list
    front() {
        // if(!this.head) {
        //     return null;
        // } else {
        //     return this.head.value;
        // }

        return this.head == null ? null : this.head.value;
    }

    // return whether or not a list is empty
    isEmpty() {
        // if(!this.head) {
        //     return "It's empty!"
        // } else {
        //     return "It's not empty!"
        // }

        // evaluates to the opposite of what you are expecting
        // if this.head exists, we are returning the 'not' of that, so it would output false
        // if this.head is null, we are returning the 'not' of that as well, so it would return true
        return this.head === null;
        // return !this.head;
    }

    
    // given a queue, determine whether or not the values therein are a pallindrome 
    // Ex: 1 --> 2 --> 3 --> 2 --> 1 --> null
    // any values that are in the same order going forwards as backwards is a pallindrome, doesn't need to just be letters
    isPallindrome() {
        if(!this.head || !this.head.next) { 
            console.log("technically true cuz nothing or 1 thing is the same to and fro...")
            return true
        }
        // collect values into a array so I can compare them to the items in the list
        var runner = this.head;
        var comparer = [];
        while (runner) {
            comparer.push(runner.value);
            runner = runner.next;
        }
        
        // compare items in the array starting from the end, to the items in the queue starting from the front
        var newRunner = this.head;
        // only need to go halfway through
        for(var i = comparer.length-1 ; i > Math.floor(comparer.length/2) ; i --) {
            if(comparer[i] != newRunner.value) {
                return false
            }
            newRunner = newRunner.next
        }
        console.log("Neato! It's a palli :)")
        return true
    }
    
    size(){
        var runner = this.head;
        var count = 0;
        while (runner){
            count++;
            runner = runner.next;
        }
        return count;
    }
    

    // Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.

    // 1 --> 2 --> 3 --> 4 --> 5 --> 
    // 1 --> 2 --> 3 -->    |      4 --> 5 --> 6 -->
    // 1 --> 4 --> 2 --> 5 --> 3 --> 6 -->
    interleaveQueue(){
        // your code here
        if(this.head == null || this.head.next == null){
            console.log('queue is too short')
        }
        else if(this.head.next.next == null){
            console.log('queue is too short')
        }
        var halfOne = new SLQueue()
        var halfTwo = new SLQueue()
        var midpoint = Math.ceil(this.size()/2)        
        console.log(midpoint)
        var runner = this.head
        for(var i = 0; i< this.size(); i++){
            if(i < midpoint){
                halfOne.enqueue(runner.value)
            } else{
                halfTwo.enqueue(runner.value)
            }
            runner=runner.next
        }
        halfOne.displayQueue()
        halfTwo.displayQueue()

        var tempQueue = new SLQueue()

        for(var i = 0; i < midpoint; i++){
            if(halfOne.head != null){
                tempQueue.enqueue(halfOne.dequeue())
            }
            if(halfOne.head != null){
                tempQueue.enqueue(halfTwo.dequeue())
            }
            
        }
        // tempQueue.displayQueue()
        return tempQueue
    }

    // return true/false if the queue has a loop!
    // this one is mostly intended for white boarding, but if you can figure out how to create a loop in your code, you may do that as well!
    hasLoop() {
        
    }


}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.interleaveQueue().displayQueue();
q.displayQueue();
