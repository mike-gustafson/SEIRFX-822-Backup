import unittest
from node_swap import nodeSwap, LinkedList

def build_linked_list(nodes):
    if not nodes:
        return None
    nodes_dict = {node['id']: LinkedList(node['value']) for node in nodes}
    head_id = nodes[0]['id']
    for node in nodes:
        if node['next']:
            nodes_dict[node['id']].next = nodes_dict[node['next']]
    return nodes_dict[head_id]

# This function will convert the linked list to a list of values for easy comparison.
def list_to_values(head):
    values = []
    while head:
        values.append(head.value)
        head = head.next
    return values

class TestNodeSwap(unittest.TestCase):
    def checkLinkedList(self, test_case, expected_values):
        linked_list = build_linked_list(test_case["linkedList"]['nodes'])
        swapped_nodes = nodeSwap(linked_list) 
        values = list_to_values(swapped_nodes)
        self.assertEqual(values, expected_values)

    def test_case_1(self):
      test_case = {
            "linkedList": {
                "head": "0",
                "nodes": [
                {"id": "0", "next": "1", "value": 0},
                {"id": "1", "next": "2", "value": 1},
                {"id": "2", "next": "3", "value": 2},
                {"id": "3", "next": "4", "value": 3},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": None, "value": 5}
                ]
            }
        }
      expected_values = [1, 0, 3, 2, 5, 4]
      self.checkLinkedList(test_case, expected_values)

    def test_case_2(self):
        test_case = {
            "linkedList": {
                "head": "0",
                "nodes": [
                {"id": "0", "next": None, "value": 0}
                ]
            }
        }
        expected_values = [0]
        self.checkLinkedList(test_case, expected_values)

    def test_case_3(self):
        test_case = {
            "linkedList": {
                "head": "0",
                "nodes": [
                {"id": "0", "next": "1", "value": 0},
                {"id": "1", "next": None, "value": 1}
                ]
            }
        }
        expected_values = [1, 0]
        self.checkLinkedList(test_case, expected_values)

    def test_case_4(self):
        test_case = {
            "linkedList": {
                "head": "5",
                "nodes": [
                {"id": "5", "next": "10", "value": 5},
                {"id": "10", "next": "15", "value": 10},
                {"id": "15", "next": "20", "value": 15},
                {"id": "20", "next": "25", "value": 20},
                {"id": "25", "next": "30", "value": 25},
                {"id": "30", "next": None, "value": 30}
                ]
            }
        }
        expected_values = [10, 5, 20, 15, 30, 25]
        self.checkLinkedList(test_case, expected_values)

    def test_case_5(self):
        test_case = {
            "linkedList": {
                "head": "1",
                "nodes": [
                {"id": "1", "next": "3", "value": 1},
                {"id": "3", "next": "9", "value": 3},
                {"id": "9", "next": "6", "value": 9},
                {"id": "6", "next": "20", "value": 6},
                {"id": "20", "next": "4", "value": 20},
                {"id": "4", "next": None, "value": 4}
                ]
            }
        }
        expected_values = [3, 1, 6, 9, 4, 20]
        self.checkLinkedList(test_case, expected_values)

    def test_case_6(self):
        test_case = {
            "linkedList": {
                "head": "5",
                "nodes": [
                {"id": "5", "next": "4", "value": 5},
                {"id": "4", "next": "3", "value": 4},
                {"id": "3", "next": "2", "value": 3},
                {"id": "2", "next": "1", "value": 2},
                {"id": "1", "next": "0", "value": 1},
                {"id": "0", "next": None, "value": 0}
                ]
            }
        }
        expected_values = [4, 5, 2, 3, 0, 1]
        self.checkLinkedList(test_case, expected_values)

    
    def test_case_7(self):
      test_case = {
            "linkedList": {
                "head": "1",
                "nodes": [
                {"id": "1", "next": "2", "value": 1},
                {"id": "2", "next": "3", "value": 2},
                {"id": "3", "next": "4", "value": 3},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": "6", "value": 5},
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "8", "value": 7},
                {"id": "8", "next": "9", "value": 8},
                {"id": "9", "next": "10", "value": 9},
                {"id": "10", "next": "11", "value": 10},
                {"id": "11", "next": "12", "value": 11},
                {"id": "12", "next": "13", "value": 12},
                {"id": "13", "next": "14", "value": 13},
                {"id": "14", "next": "15", "value": 14},
                {"id": "15", "next": None, "value": 15}
                ]
            }
            }
      expected_values = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 15]
      self.checkLinkedList(test_case, expected_values)

    
    def test_case_8(self):
      test_case = {
            "linkedList": {
                "head": "10",
                "nodes": [
                {"id": "10", "next": "20", "value": 10},
                {"id": "20", "next": "30", "value": 20},
                {"id": "30", "next": None, "value": 30}
                ]
            }
            }
      expected_values = [20, 10, 30]
      self.checkLinkedList(test_case, expected_values)

    
    def test_case_9(self):
      test_case = {
            "linkedList": {
                "head": "30",
                "nodes": [
                {"id": "30", "next": "10", "value": 30},
                {"id": "10", "next": "20", "value": 10},
                {"id": "20", "next": None, "value": 20}
                ]
            }
            }
      expected_values =  [10, 30, 20]
      self.checkLinkedList(test_case, expected_values)

    
    def test_case_10(self):
      test_case = {
            "linkedList": {
                "head": "2",
                "nodes": [
                {"id": "2", "next": "1", "value": 2},
                {"id": "1", "next": "4", "value": 1},
                {"id": "4", "next": "3", "value": 4},
                {"id": "3", "next": "6", "value": 3},
                {"id": "6", "next": "5", "value": 6},
                {"id": "5", "next": "8", "value": 5},
                {"id": "8", "next": "7", "value": 8},
                {"id": "7", "next": "10", "value": 7},
                {"id": "10", "next": "9", "value": 10},
                {"id": "9", "next": None, "value": 9}
                ]
            }
            }
      expected_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      self.checkLinkedList(test_case, expected_values)      

if __name__ == "__main__":
    unittest.main()