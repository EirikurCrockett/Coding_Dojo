// Node class
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

// Singly Linked List class
class SLL {
    constructor() {
        this.head = null;
    }

    // This is where all of our methods are going to live
    // How do we know if the list is empty or not?
    isEmpty() {
        // If this.head is equal to null it will return true, if it is not equal to null it will return false
        return this.head == null;
    }
    // How do we see the values in a singly linked list?
    // Send all my values to an array and print those values out
    toArray() {
        if (this.isEmpty()) {
            console.log("Nothing to print");
        } else {
            var arr = [];
            var runner = this.head;
            while (runner) {
                arr.push(runner.data);
                runner = runner.next;
            }
            console.log(arr);
        }
    }
    // Add a node to the list
    // The first value MUST be the head
    insertAtBack(val) {
        // Step one: check if the list is empty
        if (this.isEmpty()) {
            // This statement triggers if there is nothing at the head
            this.head = new Node(val);
        } else {
            // there is something already at head and we need to add to the back of the list
            // I need to go through my list until the .next points to null
            var runner = this.head;
            // Since we don't know how long we'll run, we need a while loop
            while (runner.next != null) {
                // while there is still a node to move down to
                runner = runner.next; // this will move me one node down the list
            }
            // We end on the last node
            runner.next = new Node(val);
        }
    }
    // InsertAtFront()
    // RemoveHead() (Remove and return the first node in the list)
    // EXTRA: Average(calculate the average of the list based on integer data)

    // Given a value, insert that value as a node at the front of your singly linked list
    insertAtFront(val) {
        // your code here
        var newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode

        return this
    }

    // Remove and return the head node from your list (remember this means we need a new head)
    removeHead(){
        // your code here
        if (this.head == null){
            console.log("List is empty")
            return
        }
        var temp = this.head
        this.head = this.head.next

        return temp
    }

    // EXTRA: calculate the average of all the values in your list (ex: if you list contained the values 3, 5, 2, 7, 3, then your average should come out as 4)
    average(){
        // your code here
        if (this.head == null){
            console.log("List is empty")
            return
        }
        var sum = 0
        var length = 0

        var runner = this.head
        while(runner != null){
            // console.log(runner.val)
            sum += runner.data
            length++
            runner=runner.next
            // console.log(sum, length)
        }
        return (sum/length)
    }

    recursiveContains(val, node = this.head){
        if(node == null){
            return false
        }
        else if(node.data == val){
            return true;
        }
        else{
            return this.recursiveContains(val, node.next);
        }
    }

    iterativeContains(val){
        var runner = this.head
        while(runner != null){
            if (runner.data == val){
                return true
            } 
            else {
                runner = runner.next
            }
        }
        return false
    }

    removeBack(){
        if( this.head == null){
            console.log("this SLL is empty")
            return this
        } else if(this.head.next == null){
            var temp = this.head.data
            this.head = null
            return temp
        }
        var temp;
        var runner = this.head
        while(runner != null){
            if(runner.next.next == null){
                temp = runner.next.data;
                runner.next = null
            }
            runner= runner.next;
        }
        return temp
    }

    reverse(){
        if( this.head == null){
            console.log("this SLL is empty")
            return this
        }
        else{
            var vals = [];
            while(this.head != null){
                // console.log(vals)
                vals.push(this.removeBack())
            }
            vals.forEach(value => {
                this.insertAtBack(value);
                
            });
        }
    }
    createLoop(){
        if( this.head == null){
            console.log("this SLL is empty")
            return this
        }
        var runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        // console.log(runner.data);
        runner.next = this.head.next;
    }
    hasLoop(){
        if( this.head == null){
            console.log("this SLL is empty")
            return this
        }
        var walker = this.head
        var runner = this.head
        while(walker!=null && runner!=null){
            if(walker.next == null ||runner.next == null){
                return false
            }
            else{
                walker = walker.next
                runner = runner.next.next
            }
            if(Object.is(walker,runner)){
                return true
            }
        }
        return false
    }

}

var mySll = new SLL();
// mySll.toArray();
// console.log(mySll.isEmpty());
mySll.insertAtBack(3);
mySll.insertAtBack(5);
mySll.insertAtBack(8);
mySll.insertAtBack(4);
mySll.insertAtBack(9);
mySll.insertAtBack(1);
mySll.toArray()
// console.log(mySll.isEmpty());
// console.log(mySll);
// mySll.insertAtFront(7);
// mySll.toArray();
// mySll.removeHead();
// mySll.toArray()
// console.log(mySll.average());
// console.log(mySll.recursiveContains(1));
// mySll.recursiveContains(1);
// mySll.removeBack();
mySll.reverse();
mySll.toArray();
// mySll.createLoop();
// mySll.toArray();
console.log(mySll.hasLoop());




// var sll2 = new SLL();