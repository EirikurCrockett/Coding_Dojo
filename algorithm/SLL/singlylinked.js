class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    // constructor equivalent in python
    // def __init__(self==this, value):
    //     self.value = value
    //     self.next = null
}

class SLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        // #1 - create our new node
        // node = Node(value) < --- python version
        var newNode = new Node(value);

        // if the sll has nothing in it
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // # 2 - connecting new node to list
            newNode.next = this.head;

            // # 3 - verifying that our pointers are correct
            this.head = newNode;
        }
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        // #1 - create new node
        var newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // #2 - connecting new node to the sll
            this.tail.next = newNode;

            // #3 - verify pointers are correct
            this.tail = newNode;
        }
    }

    // print the value in the singly linked list
    printValues() {
        // what if the list is empty?
        if (this.head == null) {
            console.log("This list is empty!")
        } else {
            var runner = this.head;
            while (runner != null) {
                console.log(`${runner.value} --> `);
                runner = runner.next;
            }
            console.log("null")
        }
    }

    // return true/false based on whether you find the value
    contains(value) {
        // what if our list is empty?
        if (this.head == null) {
            return false;
        } else {
            var runner = this.head;
            while (runner != null) {
                if (runner.value == value) {
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }

    // remove the first item in the sll
    removeFromFront() {
        if (this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
        }
        // if we simply move out head pointer over, that creates a new entry point to our list 
        // we cannot traverse backwards!
        this.head = this.head.next

        // ** See altRemoveFromFront() for a slightly different approach!
    }

    altRemoveFromFront() {
        if (this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
        }

        // an additional 'edge case like' scenario:
        // if we access the previous node in some other way, it would have access to the list
        // to rememedy this, we can point the original head away from the list in addition to moving the head pointer

        // store the original head in a temp variable
        var temp = this.head
        // move the heqad pointer to the next locations
        this.head = this.head.next
        // point the temp variable's .next out to null
        temp.next = null
        // the order in which these things happen is important! suggest drawing it out and following the steps to see :)
    }

    // remove the last item in the sll
    removeFromBack() {
        // this handles 2 edge cases: nothing in list, and only 1 item in list
        if (this.head == null || this.head.next == null) {
            console.log("List is too short! Cannot remove from back")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // ** alternate edge case handling, handles if there is only 1 items in the list or no items separately
        // if(this.head == null) {
        //     console.log("Nothing in the list! Cannot remove from back")
        //     return this
        // }
        // if(this.head.next == null) {
        //     this.head = null;
        //     this.tail = null;
        //     return this
        // }
        // set runner to start at the beginning of list
        var runner = this.head;

        // run all the way through this list until you hit the second to last item and stop
        while (runner.next.next != null) {
            runner = runner.next
        }
        // set runner.next to null, effectively removing final node from the list
        runner.next = null;

        // move the tail pointer to be on the runner's location, keeping it in the list
        this.tail = runner;
        return this
    }

    // locate the node with the lowest value, remove it from it's current location, and move it to the front of the sll
    minToFront() {
        if(this.head == null || this.head.next == null){
            console.log("This list is too short")
            return this
        }
        var min = this.tail
        var beforeMin;
        var afterMin;
        var runner = this.head
        while (runner.next != null){
            if(runner.next.value <= min.value){
                // console.log(runner.next.value, min.value)
                beforeMin = runner;
                min = runner.next;
                afterMin = runner.next.next;
            }
            runner = runner.next
        }
        if(this.head = min){
            console.log("The min is already at the front")
        }
        else if(afterMin == null){
            min.next = this.head
            this.head = min
            this.tail = beforeMin
            beforeMin.next = null
        }
        else{
            min.next = this.head
            this.head = min
            beforeMin.next = afterMin
        }
        return this
    }

    // locate the node with the highest value, remove it from it's current location, and move it to the back of the sll
    maxToBack() {
        // your code here
        if(this.head == null || this.head.next == null){
            console.log("This list is too short")
            return this
        }
        var max = this.head
        var beforeMax = null
        var afterMax = this.head.next;
        var runner = this.head
        while (runner.next != null){
            // console.log(runner.next.value, max.value)
            if(runner.next.value > max.value){
                beforeMax = runner;
                max = runner.next;
                afterMax = runner.next.next;
            }
            runner = runner.next
        }
        if(this.tail = max){
            console.log("The max is already at the back")
        }
        else if(beforeMax == null){
            this.tail.next = max;
            this.head = afterMax
            this.tail = max
        }
        else{
            this.tail.next = max;
            this.tail = max
            max.next = null
            beforeMax.next = afterMax
        }
        return this
    }
}

var sll = new SLList();
sll.printValues();
sll.addToFront(6);
sll.addToFront(47);
sll.addToFront(50);
sll.addToBack(9);
sll.addToBack(12);
sll.addToBack(1);
sll.printValues();
console.log("========================================")
console.log(sll.contains(9));
console.log(sll.contains(47));
console.log(sll.contains(25));
console.log("========================================")
// sll.removeFromFront();
sll.printValues();
console.log("========================================")
// sll.removeFromBack();
sll.minToFront().printValues();
console.log("========================================")
sll.maxToBack().printValues();
