class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def nodeSwap(head):
    # If the list has less than two nodes, no need to swap
    if not head or not head.next:
        return head

    dummy = LinkedList(0)
    dummy.next = head
    prev = dummy

    while prev.next and prev.next.next:
        # Nodes to be swapped
        first = prev.next
        second = prev.next.next

        # Swapping
        first.next = second.next
        second.next = first
        prev.next = second

        # Move to the next pair
        prev = first

    return dummy.next

# Helper function to print the linked list
def printList(head):
    current = head
    while current:
        print(current.value, end=" -> ")
        current = current.next
    print("None")

# Example usage:
# Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
head = LinkedList(1)
head.next = LinkedList(2)
head.next.next = LinkedList(3)
head.next.next.next = LinkedList(4)
head.next.next.next.next = LinkedList(5)

print("Original list:")
printList(head)

# Swap pairs
new_head = nodeSwap(head)

print("\nList after swapping every pair of adjacent nodes:")
printList(new_head)