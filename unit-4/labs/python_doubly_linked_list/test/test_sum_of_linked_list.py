# import unittest
# from sum_of_linked_list import sumOfLinkedLists, LinkedList # Replace 'your_module' with the actual module name
#   # Replace 'your_module' with the actual module name
#   # Replace 'your_module' with the actual module name

# class TestSumOfLinkedLists(unittest.TestCase):
#     def setUp(self):
#         # Define your linked lists for each test case
#         self.test_case_1 = {
#             "linkedListOne": {
#                 "head": {"value": 2, "next": "4"},
#                 "nodes": {
#                     "4": {"value": 4, "next": "7"},
#                     "7": {"value": 7, "next": "1"},
#                     "1": {"value": 1, "next": None}
#                 }
#             },
#             "linkedListTwo": {
#                 "head": {"value": 9, "next": "4"},
#                 "nodes": {
#                     "4": {"value": 4, "next": "5"},
#                     "5": {"value": 5, "next": None}
#                 }
#             }
#         }

#     def test_sum_of_linked_lists(self):
#     # Test Case 1
#         linkedListOne = self.create_linked_list(self.test_case_1["linkedListOne"])
#         linkedListTwo = self.create_linked_list(self.test_case_1["linkedListTwo"])

#         print("LinkedListOne:", self.get_linked_list_values(linkedListOne))
#         print("LinkedListTwo:", self.get_linked_list_values(linkedListTwo))

#         result = sumOfLinkedLists(linkedListOne, linkedListTwo)
#         print("Result:", self.get_linked_list_values(result))

#         # Assert the result values here based on your expectations
#         self.assertEqual(self.get_linked_list_values(result), [1, 1])


#     def create_linked_list(self, linked_list_data):
#     # Create a linked list from the provided data
#         head_data = linked_list_data["head"]
#         nodes_data = linked_list_data["nodes"]
#         node_dict = {}

#         # Create head node
#         head_node = LinkedList(head_data["value"])
#         node_dict[head_data["value"]] = head_node

#         # Create other nodes
#         for node_key, node_data in nodes_data.items():
#             node = LinkedList(node_data["value"])
#             node_dict[node_key] = node

#         # Connect nodes
#         for node_key, node_data in nodes_data.items():
#             if node_data["next"] is not None:
#                 node_dict[node_key].next = node_dict[node_data["next"]]

#         print("Created linked list:", self.get_linked_list_values(head_node))
#         return head_node



#     def get_linked_list_values(self, linked_list):
#     # Extract values from the linked list for comparison
#         values = []
#         while linked_list is not None:
#             values.append(linked_list.value)
#             linked_list = linked_list.next

#         print("Actual values:", values)
#         return values


# if __name__ == '__main__':
#     unittest.main()
