class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None
    
    def __str__(self):
        context = ''
        if self.prev and self.next:
            context = f"{self.prev}-><-{self.value}-><-{self.next}"
            return context
        elif self.prev:
            context = f"{self.prev}-><-{self.value}"
            return context
        elif self.next:
            context = f"{self.value}-><-{self.next}"
            return context
        else:
            return str(self.value)

node_one = Node(17)
print(node_one)
node_one.next = 10
print(node_one)


# Feel free to add new properties and methods to the class.
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # O(1) time | O(1) space
    def setHead(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
<<<<<<< HEAD
        self.insertBefore(self.head,node)
=======
            return
        self.insertBefore(self.head, node)
>>>>>>> 1cabf0f483df1c013159168ac6843c3e24b41b22

    # O(1) time | O(1) space
    def setTail(self, node):
<<<<<<< HEAD
        if self.tail is  None:
            self.setHead(node)
            return
        self.insertAfter(self.tail,node)
            
=======
        if self.tail is None:
            self.setHead(node)
            return
        self.insertAfter(self.tail, node)
>>>>>>> 1cabf0f483df1c013159168ac6843c3e24b41b22

    def insertBefore(self, node, nodeToInsert):
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)
        nodeToInsert.prev = node.prev
        nodeToInsert.next = node
<<<<<<< HEAD
        if node.prev != None:
            self.head = nodeToInsert
        else:
            node.prev.next = nodeToInsert
        node.prev =  nodeToInsert
        
=======
        if node.prev is None:
            self.head = nodeToInsert
        else:
            node.prev.next = nodeToInsert
        node.prev = nodeToInsert
>>>>>>> 1cabf0f483df1c013159168ac6843c3e24b41b22

    def insertAfter(self, node, nodeToInsert):
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)
        nodeToInsert.prev = node
        nodeToInsert.next = node.next
<<<<<<< HEAD
        if node.next != None:
           self.tail =  nodeToInsert
        else:
            node.next.prev = nodeToInsert
        node.next =  nodeToInsert
=======
        if node.next is None:
            self.tail = nodeToInsert
        else:
            node.next.prev = nodeToInsert
        node.next = nodeToInsert
        
>>>>>>> 1cabf0f483df1c013159168ac6843c3e24b41b22

    def insertAtPosition(self, position, nodeToInsert):
        if position == 1:
            self.setHead(nodeToInsert)
            return
        node = self.head
        current_position = 1
<<<<<<< HEAD
        while node is not  None and current_position != position:
=======
        
        while node is not None and current_position != position:
>>>>>>> 1cabf0f483df1c013159168ac6843c3e24b41b22
            node = node.next
            current_position += 1
        
        if node is not None:
            self.insertBefore(node, nodeToInsert)
        else:
            self.setTail(nodeToInsert)

    def removeNodesWithValue(self, value):
        current = self.head
        while current is not None:
            if current.value == value:
                node_remove = current
                current = current.next
                self.remove(node_remove)
            else:
                current = current.next

    def remove(self, node):
        if node == self.head:
           self.head = self.head.next
        if node == self.tail:
           self.tail  = self.tail.prev
        self.removeNodeBindings(node)
       
    def removeNodeBindings(self,node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None

    def containsNodeWithValue(self, value):
<<<<<<< HEAD
      node = self.head 
      while node is not None and  node.value != value:
          node=node.next  
          return node is not None
=======
        # TODO Write your code here.
        pass



bank_roll = DoublyLinkedList()
steve_node = Node(3)
steve_node.next # 6
steve_node.prev # 3
don_node = Node(2)
print(don_node.prev) # None
print(don_node.next) # None


bank_roll.insertAfter(steve_node, don_node)
>>>>>>> 1cabf0f483df1c013159168ac6843c3e24b41b22
