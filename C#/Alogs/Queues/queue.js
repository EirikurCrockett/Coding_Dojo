class ArrayQueue{
    constructor(){
        this.items = [];
    }

    enqueue(val) {
        // your code here
        this.items.push(val);
        return this.items.length();
    }
    
    // Dequeue - remove and return the first item
    dequeue() {
        // your code here
        return this.items.shift();
    }
    // IsEmpty - return true or false whether the queue is empty
    isEmpty() {
        if(this.item[0] == null){
            return true;
        }
        else{
            return true;
        }
    }
    
    // Front - return the first item without removing it
    front() {
        if(this.isEmpty){
            return null
        }
        else{
            return this.items[0];
        }
    }
}

class Node{
    constructor(val){
        this.value=val;
        this.next = null;
    }
}

class SLQueue{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length == 0
    }

    enqueue(val){
        if(this.isEmpty){
            this.head = new Node(val);
        }
        else{
            var runner = this.head;
            while(runner.next != 0){
                runner = runner.next;
            }
            runner.next = new Node(val);
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(this.isEmpty){
            console.log("This Queue is Empty");
            return this;
        } else{
            this.head = this.head.next;
            this.length--;
            return this;
        }
    }

    size(){
        return this.length;
    }
}

