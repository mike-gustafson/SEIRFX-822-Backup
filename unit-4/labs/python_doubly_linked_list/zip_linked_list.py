class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def zip_linked_list(head):
    if not head or not head.next or not head.next.next:
        return head

    # Find the middle of the linked list
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # Reverse the second half of the list
    prev = None
    current = slow
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node

    # Merge two halves
    first = head
    second = prev
    while second.next:
        temp1 = first.next
        temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2

    return head

# Helper function to create a linked list from a list of values
def create_linked_list(values):
    if not values:
        return None
    head = ListNode(values[0])
    current = head
    for value in values[1:]:
        current.next = ListNode(value)
        current = current.next
    return head

# Helper function to print a linked list
def print_linked_list(head):
    values = []
    current = head
    while current:
        values.append(str(current.value))
        current = current.next
    print(" -> ".join(values))