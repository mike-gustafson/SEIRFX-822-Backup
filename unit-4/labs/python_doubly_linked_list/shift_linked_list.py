class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def shiftLinkedList(nodes, k):
    if not nodes:
        return None

    # Create the linked list
    head = ListNode(int(nodes[0]["value"]))
    current = head
    for node in nodes[1:]:
        current.next = ListNode(int(node["value"]))
        current = current.next

    # Calculate the length of the linked list
    length = 0
    current = head
    while current:
        length += 1
        current = current.next

    # Calculate the number of shifts to perform
    k %= length

    # Perform the shifts
    if k > 0:
        new_head = head
        for _ in range(length - k - 1):
            new_head = new_head.next

        # Adjust the next pointers to perform the shift
        result = new_head.next
        new_head.next = None
        current = result
        while current.next:
            current = current.next
        current.next = head

        return result

    return head
