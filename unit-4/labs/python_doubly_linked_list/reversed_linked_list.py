class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def reverseLinkedList(head):
    # Initialize three pointers as described in the hints
    prev_node = None
    current_node = head
    next_node = None
    
    # Iterate through the list and reverse the links
    while current_node:
        
        next_node = current_node.next
        current_node.next = prev_node
        prev_node = current_node
        current_node = next_node
    
    return prev_node

# Example usage:
# Create a linked list 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> None
head = ListNode(0)
current = head
for i in range(1, 6):
    current.next = ListNode(i)
    current = current.next

# Reverse the linked list
new_head = reverseLinkedList(head)

# Print the reversed list
current = new_head
while current:
    print(current.value, end=" -> ")
    current = current.next

    pass
# Expected output: 5 -> 4 -> 3 -> 2 -> 1 -> 0 ->
    
def create_linked_list(node_values):
    head = ListNode(node_values[0])
    current = head
    for value in node_values[1:]:
        current.next = ListNode(value)
        current = current.next
    return head

def linked_list_to_list(head):
    values = []
    current = head
    while current:
        values.append(current.value)
        current = current.next
    return values