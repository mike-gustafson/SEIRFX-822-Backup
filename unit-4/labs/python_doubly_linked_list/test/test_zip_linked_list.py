# import unittest
# from zip_linked_list import zip_linked_list, create_linked_list, print_linked_list


# class TestZipLinkedList(unittest.TestCase):
#     def linked_list_to_list(self, head):
#         values = []
#         current = head
#         while current:
#             values.append(current.value)
#             current = current.next
#         return values

#     def test_zip_linked_list(self):
       
#         test_case1 = {
#             "linkedList": {
#                 "head": "1",
#                 "nodes": [
#                     {"id": "1", "next": "2", "value": 1},
#                     {"id": "2", "next": "3", "value": 2},
#                     {"id": "3", "next": "4", "value": 3},
#                     {"id": "4", "next": "5", "value": 4},
#                     {"id": "5", "next": "6", "value": 5},
#                     {"id": "6", "next": None, "value": 6}
#                 ]
#             }
#         }

#         linked_list_values = [node["value"] for node in test_case1["linkedList"]["nodes"]]
#         head = create_linked_list(linked_list_values)
#         result_head = zip_linked_list(head)
#         result_values = self.linked_list_to_list(result_head)
#         expected_result = [1, 6, 2, 5, 3, 4]
#         self.assertEqual(result_values, expected_result)

#     def test_zip_linked_list2(self):
#         test_case1 = {
#             "linkedList": {
#                 "head": "1",
#                 "nodes": [
#                     {"id": "1", "next": "2", "value": 1},
#                     {"id": "2", "next": "3", "value": 2},
#                     {"id": "3", "next": "4", "value": 3},
#                     {"id": "4", "next": "5", "value": 4},
#                     {"id": "5", "next": "6", "value": 5},
#                     {"id": "6", "next": "7", "value": 6},
#                     {"id": "7", "next": None, "value": 7}
#                 ]
#             }
#         }

#         linked_list_values = [node["value"] for node in test_case1["linkedList"]["nodes"]]
#         head = create_linked_list(linked_list_values)
#         result_head = zip_linked_list(head)
#         result_values = self.linked_list_to_list(result_head)
#         expected_result = [1, 7, 2, 6, 3, 5, 4]
#         self.assertEqual(result_values, expected_result)

#     def test_zip_linked_list3(self):
       
#         test_case2 = {
#             "linkedList": {
#                 "head": "1",
#                 "nodes": [
#                     {"id": "1", "next": "2", "value": 1},
#                     {"id": "2", "next": "3", "value": 2},
#                     {"id": "3", "next": None, "value": 3}
#                 ]
#             }
#         }

#         linked_list_values = [node["value"] for node in test_case2["linkedList"]["nodes"]]
#         head = create_linked_list(linked_list_values)
#         result_head = zip_linked_list(head)
#         result_values = self.linked_list_to_list(result_head)
#         expected_result = [1, 3, 2]
#         self.assertEqual(result_values, expected_result)

# if __name__ == '__main__':
#     unittest.main()