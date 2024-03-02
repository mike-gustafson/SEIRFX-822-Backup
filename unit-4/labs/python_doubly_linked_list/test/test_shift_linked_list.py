# import unittest
# from problem.shift_linked_list import shiftLinkedList, ListNode

# class TestShiftLinkedList(unittest.TestCase):
#     def create_linked_list(self, linked_list_data):
#         # Helper function to create a linked list from the given data
#         nodes = {}
#         for node_data in linked_list_data["nodes"]:
#             nodes[node_data["id"]] = ListNode(node_data["value"])

#         for node_data in linked_list_data["nodes"]:
#             if node_data["next"]:
#                 nodes[node_data["id"]].next = nodes[node_data["next"]]

#         return nodes[linked_list_data["head"]]

#     def linked_list_to_list(self, head):
#         # Helper function to convert a linked list to a list for easier comparison
#         result = []
#         current = head
#         while current:
#             result.append(current.val)
#             current = current.next
#         return result

#     def test_shift_linked_list(self):
#         self.test_cases = [
#         #   Test Case 1
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 2
#             },
#             # Test Case 2
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 0
#             },
#             # Test Case 3
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 1
#             },
#             # Test Case 4
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 3
#             },
#             # Test Case 5
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 4
#             },
#             # Test Case 6
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 5
#             },
#             # Test Case 7
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 6
#             },
#             # Test Case 8
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 8
#             },
#             # Test Case 9
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 14
#             },
#             # Test Case 10
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": 18
#             },
#             # Test Case 11
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -1
#             },
#             # Test Case 12
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -2
#             },
#             # Test Case 13
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -3
#             },
#             # Test Case 14
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -4
#             },
#             # Test Case 15
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -5
#             },
#             # Test Case 16
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -6
#             },
#             # Test Case 17
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -8
#             },
#             # Test Case 18
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -14
#             },
#             # Test Case 19
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "2", "value": 1},
#                 {"id": "2", "next": "3", "value": 2},
#                 {"id": "3", "next": "4", "value": 3},
#                 {"id": "4", "next": "5", "value": 4},
#                 {"id": "5", "next": None, "value": 5}
#                 ]
#             },
#             "k": -18
#             },
#             # Test Case 20
#             {
#             "linkedList": {
#                 "head": "0",
#                 "nodes": [
#                 {"id": "0", "next": "1", "value": 0},
#                 {"id": "1", "next": "4", "value": 1},
#                 {"id": "2", "next": None, "value": 2},
#                 {"id": "3", "next": "5", "value": 3},
#                 {"id": "4", "next": "3", "value": 4},
#                 {"id": "5", "next": "2", "value": 5}
#                 ]
#             },
#             "k": 2
#             }
#         ]
            
        

# import unittest
# from shift_linked_list import shiftLinkedList, ListNode

# class TestShiftLinkedList(unittest.TestCase):
#     def assertLinkedListEqual(self, actual, expected):
#         def linkedListToList(node):
#             result = []
#             while node:
#                 result.append({"value": node.val})
#                 node = node.next
#             return result

        
#         actual_list = linkedListToList(actual)

        
#         self.assertEqual(actual_list, expected)

#     def test_shift_linked_list(self):
#         # Test Case 1
#         input_nodes = [
#             {"value": 0},
#             {"value": 1},
#             {"value": 2},
#             {"value": 3},
#             {"value": 4},
#             {"value": 5}
#         ]
#         k = 2
#         expected_result = [
#             {"value": 4},
#             {"value": 5},
#             {"value": 0},
#             {"value": 1},
#             {"value": 2},
#             {"value": 3}
#         ]

        
#         head = shiftLinkedList(input_nodes, k)
        
        
#         self.assertLinkedListEqual(head, expected_result)

# if __name__ == '__main__':
#     unittest.main()





