# import unittest
# from reversed_linked_list import reverseLinkedList, ListNode, create_linked_list, linked_list_to_list
# class TestReverseLinkedList(unittest.TestCase):
#     def setUp(self):
#         self.nodes = [
#             {"id": "0", "next": "1", "value": 0},
#             {"id": "1", "next": "2", "value": 1},
#             {"id": "2", "next": "3", "value": 2},
#             {"id": "3", "next": "4", "value": 3},
#             {"id": "4", "next": "5", "value": 4},
#             {"id": "5", "next": None, "value": 5}
#         ]
#         self.head = create_linked_list([node['value'] for node in self.nodes])
#     def test_reverse_linked_list(self):
#         new_head = reverseLinkedList(self.head)
#         reversed_list = linked_list_to_list(new_head)
#         expected_reversed_list = [node['value'] for node in reversed(self.nodes)]
#         self.assertEqual(reversed_list, expected_reversed_list)
#     def test_reverse_linked_list_case2(self):
#         linked_list_data = {
#             "head": "0",
#             "nodes": [
#                 {"id": "0", "next": None, "value": 0}
#             ]
#         }
#         head = create_linked_list([node['value'] for node in linked_list_data["nodes"]])
#         new_head = reverseLinkedList(head)
#         reversed_list = linked_list_to_list(new_head)
#         expected_reversed_list = [node['value'] for node in reversed(linked_list_data["nodes"])]
#         self.assertEqual(reversed_list, expected_reversed_list)
#     def test_reverse_linked_list_case3(self):
#         linked_list_data = {
#             "head": "0",
#             "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": None, "value": 1}
#             ]
#         }
#         head = create_linked_list([node['value'] for node in linked_list_data["nodes"]])
#         new_head = reverseLinkedList(head)
#         reversed_list = linked_list_to_list(new_head)
#         expected_reversed_list = [node['value'] for node in reversed(linked_list_data["nodes"])]
#         self.assertEqual(reversed_list, expected_reversed_list)
# # Running the test
# if __name__ == '__main__':
#     unittest.main(argv=[''], exit=False)
# if __name__ == '__main__':
#     unittest.main()