class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    AddNode(val, node = this.root){
        // console.log("adding node", val)

        if(this.isEmpty()){
            this.root = new Node(val);
            return this
        }
        else{
            if(val <= node.data && node.left == null){
                node.left = new Node(val);
                return this
            }
            else if(val <= node.data && node.left != null){
                return this.AddNode(val, node.left);
            }
            else if(val > node.data && node.right == null){
                node.right = new Node(val);
                return this
            } else if (val > node.data && node.right != null){
                return this.AddNode(val, node.right);
            }
        }
        
    }



    isEmpty(){
        if(this.root == null){
            // console.log("empty")
            return true;
        }
        else{
            return false;
        }
    }

    min(){
        var runner = this.root
        while(runner.left != null){
            runner= runner.left
        }
        return runner.data
    }

    max(){
        var runner = this.root
        while(runner.right != null){
            runner= runner.right
        }
        return runner.data
    }

    average(node = this.root){
        return this.sum()/this.countNodes()
    }

    sum(node = this.root){
        if(node == null){
            return 0
        }
        else if(node.left == null && node.right == null){
            return node.data
        }
        else if(node.left == null){
            return node.data + this.sum(node.right)
        }
        else if(node.right == null){
            return node.data + this.sum(node.left)
        }
        else{
            return node.data + this.sum(node.left) + this.sum(node.right)
        }
    }
    
    countNodes(node = this.root){
        if(node == null){
            return 0
        }
        else if(node.left == null && node.right == 0){
            return 1
        }
        else if(node.left == null){
            return 1 + this.countNodes(node.right)
        }
        else if(node.right == null){
            return 1 + this.countNodes(node.left)
        }
        else{
            return 1 + this.countNodes(node.left) + this.countNodes(node.right)
        }
    }

    preorderDepth(checkLeft = 0, checkRight = 0, node = this.root){
        if(this.isEmpty()){
            Console.log("This Tree is empty")
        }
        if(node != null){
            console.log(`Left: ${checkLeft}, Right: ${checkRight}, Value: ${node.data}`)
            this.preorderDepth(checkLeft + 1, checkRight, node.left)
            this.preorderDepth(checkLeft, checkRight + 1, node.right)
        }
        // else{
        //     console.log(`Left: ${checkLeft}, Right: ${checkRight}, Null`)
        // }
    }

    inorderDepth(checkLeft = 0, checkRight = 0, node = this.root){
        if(this.isEmpty()){
            Console.log("This Tree is empty")
        }
        if(node != null){
            this.inorderDepth(checkLeft + 1, checkRight, node.left)
            console.log(`Left: ${checkLeft}, Right: ${checkRight}, Value: ${node.data}`)
            this.inorderDepth(checkLeft, checkRight + 1, node.right)
        }
        // else{
        //     console.log(`Left: ${checkLeft}, Right: ${checkRight}, Null`)
        // }


    }

    postorderDepth(checkLeft = 0, checkRight = 0, node = this.root){
        if(this.isEmpty()){
            Console.log("This Tree is empty")
        }
        if(node != null){
            this.postorderDepth(checkLeft + 1, checkRight, node.left)
            this.postorderDepth(checkLeft, checkRight + 1, node.right)
            console.log(`Left: ${checkLeft}, Right: ${checkRight}, Value: ${node.data}`)
        }
        // else{
        //     console.log(`Left: ${checkLeft}, Right: ${checkRight}, Null`)
        // }
    }
    
    inverseOrderDepth(checkLeft = 0, checkRight = 0, node = this.root){
        if(this.isEmpty()){
            Console.log("This Tree is empty")
        }
        if(node != null){
            this.inverseOrderDepth(checkLeft, checkRight + 1, node.right)
            console.log(`Left: ${checkLeft}, Right: ${checkRight}, Value: ${node.data}`)
            this.inverseOrderDepth(checkLeft + 1, checkRight, node.left)
        }
        // else{
        //     console.log(`Left: ${checkLeft}, Right: ${checkRight}, Null`)
        // }
    }


    contains(val){
        if(this.isEmpty()){
            return false
        }
        var runner = this.root

        while(runner != null){
            if(runner.data == val){
                return true
            }
            else{
                if(runner.data > val){
                    runner = runner.left
                }
                else{
                    runner = runner.right
                }
            }
        }
        return false
    }

    containsRecursive(val, node = this.root){
        if(this.isEmpty()){
            return false
        }
        if(node.data == val){
            return true
        }
        else if(val < node.data && node.left == null){
            return false
        }
        else if(val < node.data){
            return this.contains(val, node.left);
        }
        else if(val > node.data && node.right == null){
            return false
        } else if (val > node.data){
            return this.contains(val, node.right);
        }
    }

    range(){
        return (this.max() - this.min())
    }

    size(node = this.root){
        if(this.isEmpty()){
            return 0
        }
        else{
            if(node.left != null && node.right != null){
                return this.size(node.left) + this.size(node.right) + 1
            } else if(node.left != null){
                return this.size(node.left) + 1
            } else if(node.right != null){
                return this.size(node.right) + 1
            } else{
                return 1
            }
        }
    }

    height(node = this.root){
        if(this.isEmpty()){
            return 0
        }
        else{
            var leftNode = 0;
            var rightNode = 0;
            if(node.left != null && node.right != null){
                leftNode = this.height(node.left)//1
                rightNode = this.height(node.right)
            } else if(node.left != null){
                leftNode = this.height(node.left)
            } else if(node.right != null){
                rightNode = this.height(node.right)
            }

            if(leftNode >= rightNode){
                return leftNode + 1
            } else{
                return rightNode + 1
            }
            
        }
    }

    isFull(node = this.root){
        if(this.isEmpty()){
            return false
        } 
        else{
            if(node.left != null && node.right != null){
                var nodecount = this.isFull(node.left) + this.isFull(node.right)
                console.log(nodecount)
                if(nodecount > 0){
                    return false
                } else{
                    return true
                }
            } else if(node.left != null){
                return 1
            } else if(node.right != null){
                return 1
            } else{
                return 0
            }

        }
    }

}
var binTree = new BST()
binTree.AddNode(50)
binTree.AddNode(25)
binTree.AddNode(20)
binTree.AddNode(30)
binTree.AddNode(75)
binTree.AddNode(70)
binTree.AddNode(80)

// console.log(binTree.sum())
// console.log(binTree.countNodes())
// console.log(binTree.average())
console.log("\nPreorder");
binTree.preorderDepth();
// console.log("\nInorder");
// binTree.inorderDepth();
// console.log("\nPostorder");
// binTree.postorderDepth();
// console.log("\nInverseOrder");
// binTree.inverseOrderDepth();
// console.log(binTree.contains(7));
// console.log(binTree.containsRecursive(7));
console.log("Size");
console.log(binTree.size())
console.log("Height");
console.log(binTree.height())
console.log("Is Full?");
console.log(binTree.isFull())



// console.log(binTree.max());
// console.log(binTree.min());
// console.log(binTree.range());