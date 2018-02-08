/* Linked List */
function List() {
    this.start = null;
    this.end = null;
}

/*  List methods */
List.prototype = {
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode : function() {
        return {data: null, next: null};
    },

    /*
        Method: insertAtTail
        Adds a Node to the END of the List
    */
    insertAtTail: function(data) {
        // if linkedList is empty
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    },

    /*
        Method: print
        Traverse the list. For each node, append the current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
        var listString = 'Head -> ';
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            // print out the 'current' Node's data
            listString += current.data + ' -> ';
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(listString +'Tail');
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead: function(data) {
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // - Set a placeholder for this.start
            let temp = this.start;
            // - Make a new node at this.start
            this.start = this.makeNode();
            // - Set the link to the next element as the previous this.start
            this.start.next = temp;
        }
        // finally, add the data to the start Node
        this.start.data = data;
    },

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */
    length: function() {
        let listLength = 0;
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            listLength ++;
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log('-length');
        console.log(listLength);
    },

    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */
    exists: function(data) {
        console.log('-contains ' + data + '?')
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            if(current.data == data) {
                return true;
            }
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        return false;
    },

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each: function(f) {
        console.log('-running function on each node');
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            f(current.data);
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log('-done');
    },

    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
        console.log('-finding index of ' + data);
        let index = 0;
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            if(current.data == data) {
                return index;
            }
            // increment index
            index ++;
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        return null;
    },

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
              */
    dataFrom: function(i) {
        // Enter code here!
    },

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */
    insertAt: function(i, data){
        // Enter code here!
    },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
        // Enter code here!
    }
}

//insertAtTail()
var LinkedList = new List();
let i = 1;
while(i <= 10) {
    LinkedList.insertAtTail(i);
    i+=1;
}
LinkedList.print();
console.log();

//insertAtHead()
var LinkedList2 = new List();
let i2 = 1;
while(i2 <= 10) {
    LinkedList2.insertAtHead(i2);
    i2+=1;
}
LinkedList2.print();
console.log();

//length()
LinkedList.length();
console.log();

//exists()
console.log(LinkedList.exists(7));
console.log(LinkedList.exists(11));
console.log();

//each()
LinkedList.each(console.log);
console.log();

//indexOf()
console.log(LinkedList.indexOf(7));
console.log();
console.log(LinkedList.indexOf(11));
console.log();