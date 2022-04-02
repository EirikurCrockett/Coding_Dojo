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

    // return (don't remove) the top value of a stack
    returnTop() {
        if (!this.top) {
            console.log("This stack is empty!")
            return null
        } else {
            return this.top.value
        }
    }

    printStack() {
        var runner = this.top
        while (runner != null) {
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        return this
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

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        if (this.head == null) {
            console.log("Nothing in this queue!")
            return null
        }

        var runner = this.head;
        var min = runner.value;

        while (runner != null) {
            if (runner.value < min) {
                min = runner.value
            }
            runner = runner.next
        }

        runner = this.head;
        while (runner.next.next != null) {
            if (runner.next.value === min) {
                runner.next = runner.next.next
            }
            else {
                runner = runner.next
            }
        }
        if (runner.next.value == min) {
            this.tail = runner
            runner.next == null
        }
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

    // return the value of the front node without removing from list
    front() {
        if (!this.head) {
            return null;
        } else {
            return this.head.value;
        }
    }

    // return whether or not a list is empty
    isEmpty() {
        if (!this.head) {
            return "It's empty!"
        } else {
            return "It's not empty!"
        }
    }

    // size() {
    //     var runner = this.head;
    //     var count = 0;
    //     while (runner) {
    //         count++;
    //         runner = runner.next;
    //     }
    //     return count;
    // }

    // Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.
    // 1 --> 2 --> 3 --> 4 --> 5 --> 
    // 1 --> 2 --> 3 -->    |      4 --> 5 --> 
    // 1 --> 4 --> 2 --> 5 --> 3 --> 

    size() {
        var runner = this.head;
        var count = 0;
        while (runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    interleaveQueue() {
        var midpt = Math.ceil(this.size() / 2);
        var tempQueue = new SLQueue();

        for (var i = 1; i <= midpt; i++) {
            tempQueue.enqueue(this.dequeue());
        }

        var length = tempQueue.size();
        for (var j = 1; j <= length; j++) {
            tempQueue.enqueue(tempQueue.dequeue());
            tempQueue.enqueue(this.dequeue());
        }
        tempQueue.displayQueue();
    }

    // given a queue, determine whether or not the values therein are a palindrome 
    // Ex: 1 --> 2 --> 3 --> 2 --> 1 --> null
    // any values that are in the same order going forwards as backwards is a
    // palindrome, doesn't need to just be letters
    // so like, 11 -> 23 -> 12345 -> 23 -> 11 is a palindrome as far as a queue
    // is concerned
    // so is 'hello' -> 'good' -> 'morning' -> 'good' -> 'hello' is a palindrome
    // do this non-destructively; don't modify your queue in any way
    // also, don't just drop the values from the queue into an array - we're doing
    // SLLs, not arrays!
    // return a boolean, not a string

    // isPalindrome() {
    //     if(this.head.value != this.tail.value){
    //         return false
    //     }

    //     var runner = this.head.next
    //     var len = this.size()-1
    //     for(var i = 1; i < Math.floor(len / 2); i++){
    //         var checkBack = this.head;
    //         var len2 = len - i

    //         for(var j = 0; j <= len2; j++){
    //             if(j == len2){
    //                 break
    //             }
    //             else{
    //                 checkBack = checkBack.next
    //             }
    //         }
    //         console.log(i, runner.value, j, checkBack.value)
    //         if(runner.value != checkBack.value){
    //             return false
    //         }
    //         runner=runner.next;
    //     }
    //     return true
    // }

    // isPalindrome(){
    //     var tempQueue = new SLQueue();
    //     var len = this.size();

    //     for(var i = 0; i < len; i++){
    //         var runner = this.head
    //         var len2 = len - i - 1
    //         for(var j = 0; j <= len2; j++){
    //             if(j == len2){
    //                 // console.log(runner.value)
    //                 tempQueue.enqueue(runner.value)
    //             }
    //             runner = runner.next
    //         }
    //     }

    //     var walker1 = this.head;
    //     var walker2 = tempQueue.head;
    //     for(var i = 0; i < len; i++){
            // if(walker1.value != walker2.value){
            //     return false
            // }
            // walker1 = walker1.next
            // walker2 = walker2.next
    //     }
    //     return true
    // }

    // isPalindrome(){
    //     var len = this.size()
    //     var tempStack = new SLStack()
    //     var runner = this.head
    //     for(var i = 0; i < len; i++){
    //         tempStack.push(runner.value)
    //         runner = runner.next
    //     }

    //     var walker1 = this.head;
    //     var walker2 = tempStack.top;
    //     for(var i = 0; i < len; i++){
    //         console.log(walker1.value, walker2.value)
    //         if(walker1.value != walker2.value){
    //             return false
    //         }
    //         walker1 = walker1.next
    //         walker2 = walker2.next
    //     }
    //     return true
    // }

    isPalindrome(){
        var len = this.size()
        var tempStack = new SLStack()
        for(var i = 0; i < Math.floor(len / 2); i++){
            tempStack.push(this.dequeue())
        }

        if(len % 2 != 0){
            var walker1 = this.head.next;
            var len2 = this.size() -1
        }
        else{
            var walker1 = this.head;
            var len2 = this.size()
        }
        
        var walker2 = tempStack.top;
        for(var i = 0; i < len2; i++){
            console.log(walker1.value, walker2.value)
            if(walker1.value != walker2.value){
                return false
            }
            walker1 = walker1.next
            walker2 = walker2.next
        }
        return true
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
