class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

def sumOfLinkedLists(linkedListOne, linkedListTwo):
    result_head = None
    current_result_node = None
    carry = 0

    node_one = linkedListOne
    node_two = linkedListTwo

    while node_one is not None or node_two is not None or carry != 0:
        value_one = node_one.value if node_one is not None else 0
        value_two = node_two.value if node_two is not None else 0

        total_sum = value_one + value_two + carry
        carry = total_sum // 10
        current_digit = total_sum % 10

        if current_result_node is None:
            result_head = LinkedList(current_digit)
            current_result_node = result_head
        else:
            current_result_node.next = LinkedList(current_digit)
            current_result_node = current_result_node.next

        if node_one is not None:
            node_one = node_one.next
        if node_two is not None:
            node_two = node_two.next

    return result_head


