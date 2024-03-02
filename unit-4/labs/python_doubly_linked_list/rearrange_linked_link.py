class LinkedList:
    def __init__(self, value=None):
        self.value = value
        self.next = None


def rearrangeLinkedList(head, k):
    smallerListHead = None
    smallerListTail = None
    equalListHead = None
    equalListTail = None
    greaterListHead = None
    greaterListTail = None
    
    node = head
    while node is not None:
        if node.value < k:
            smallerListHead, smallerListTail = growLinkedList(smallerListHead, smallerListTail, node)
        elif node.value > k:
            greaterListHead, greaterListTail = growLinkedList(greaterListHead, greaterListTail, node)
        else:
            equalListHead, equalListTail = growLinkedList(equalListHead, equalListTail, node)
            
        prevNode = node
        node = node.next
        prevNode.next = None
        
    firstHead, firstTail = connectLinkedList(smallerListHead, smallerListTail, equalListHead, equalListTail)
    finalHead, finalTail = connectLinkedList(firstHead, firstTail, greaterListHead, greaterListTail)

    return finalHead
        
def growLinkedList(head, tail, node):
    newHead = head
    newTail = node

    if newHead is None:
        newHead = node
    if tail is not None:
        tail.next = node        
    return (newHead, newTail)
        
def connectLinkedList(headOne, tailOne, headTwo, tailTwo):
    newHead = headOne if headOne else headTwo
    newTail = tailTwo if tailTwo else tailOne
        
    if tailOne is not None:
        tailOne.next = headTwo
    return (newHead, newTail)

def create_linked_list(lst):
    if not lst:
        return None
    head = LinkedList(lst[0])
    current = head
    for value in lst[1:]:
        current.next = LinkedList(value)
        current = current.next
    return head

def print_linked_list(node):
    values = []
    while node:
        values.append(str(node.value))
        node = node.next
    return '[' + ', '.join(values) + ']'







    
        
