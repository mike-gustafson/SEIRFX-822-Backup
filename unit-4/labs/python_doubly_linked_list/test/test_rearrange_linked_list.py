import unittest
from rearrange_linked_link import rearrangeLinkedList, create_linked_list

class TestRearrangeLinkedList(unittest.TestCase):

    def test_rearrange_linked_list_case_1(self):
        TestCase1={
            "linkedList": {
                "head": "3",
                "nodes": [
                    {"id": "3", "next": "0", "value": 3},
                    {"id": "0", "next": "5", "value": 0},
                    {"id": "5", "next": "2", "value": 5},
                    {"id": "2", "next": "1", "value": 2},
                    {"id": "1", "next": "4", "value": 1},
                    {"id": "4", "next": None, "value": 4}
                ]
            },
            "k": 3
        }
        k = TestCase1['k']
        node_values = []
        for node in TestCase1['linkedList']['nodes']:
            node_values.append(node['value'])
        linkedList = create_linked_list(node_values)
        rearranged_list = rearrangeLinkedList(linkedList, k)

        self.assertEqual(rearranged_list.value, 0)
        self.assertEqual(rearranged_list.next.value, 2)
        self.assertEqual(rearranged_list.next.next.value, 1)
        self.assertEqual(rearranged_list.next.next.next.value, 3)
        self.assertEqual(rearranged_list.next.next.next.next.value, 5)
        self.assertEqual(rearranged_list.next.next.next.next.next.value, 4)

    def test_rearrange_linked_list_case_2(self):
        TestCase2={
            "linkedList": {
                "head": "3",
                "nodes": [
                {"id": "3", "next": "0", "value": 3},
                {"id": "0", "next": "2", "value": 0},
                {"id": "2", "next": "1", "value": 2},
                {"id": "1", "next": "4", "value": 1},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": None, "value": 5}
                ]
            },
            "k": 4
            }
        k = TestCase2['k']
        node_values = []
        for node in TestCase2['linkedList']['nodes']:
            node_values.append(node['value'])
        linkedList = create_linked_list(node_values)
        rearranged_list = rearrangeLinkedList(linkedList, k)

        self.assertEqual(rearranged_list.value, 3)
        self.assertEqual(rearranged_list.next.value, 0)
        self.assertEqual(rearranged_list.next.next.value, 2)
        self.assertEqual(rearranged_list.next.next.next.value, 1)
        self.assertEqual(rearranged_list.next.next.next.next.value, 4)
        self.assertEqual(rearranged_list.next.next.next.next.next.value, 5)

    def test_rearrange_linked_list_case_3(self):
        TestCase3={
            "linkedList": {
                "head": "3",
                "nodes": [
                {"id": "3", "next": "0", "value": 3},
                {"id": "0", "next": "2", "value": 0},
                {"id": "2", "next": "1", "value": 2},
                {"id": "1", "next": "4", "value": 1},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": None, "value": 5}
                ]
            },
            "k": 5
            }
        k = TestCase3['k']
        node_values = []
        for node in TestCase3['linkedList']['nodes']:
            node_values.append(node['value'])
        linkedList = create_linked_list(node_values)
        rearranged_list = rearrangeLinkedList(linkedList, k)

        self.assertEqual(rearranged_list.value, 3)
        self.assertEqual(rearranged_list.next.value, 0)
        self.assertEqual(rearranged_list.next.next.value, 2)
        self.assertEqual(rearranged_list.next.next.next.value, 1)
        self.assertEqual(rearranged_list.next.next.next.next.value, 4)
        self.assertEqual(rearranged_list.next.next.next.next.next.value, 5)

    def test_rearrange_linked_list_case_4(self):
        TestCase4={
                "linkedList": {
                    "head": "0",
                    "nodes": [
                    {"id": "0", "next": "3", "value": 0},
                    {"id": "3", "next": "2", "value": 3},
                    {"id": "2", "next": "1", "value": 2},
                    {"id": "1", "next": "4", "value": 1},
                    {"id": "4", "next": "5", "value": 4},
                    {"id": "5", "next": None, "value": 5}
                    ]
                },
                "k": 0
                }
        k = TestCase4['k']
        node_values = []
        for node in TestCase4['linkedList']['nodes']:
            node_values.append(node['value'])
        linkedList = create_linked_list(node_values)
        rearranged_list = rearrangeLinkedList(linkedList, k)

        self.assertEqual(rearranged_list.value, 0)
        self.assertEqual(rearranged_list.next.value, 3)
        self.assertEqual(rearranged_list.next.next.value, 2)
        self.assertEqual(rearranged_list.next.next.next.value, 1)
        self.assertEqual(rearranged_list.next.next.next.next.value, 4)
        self.assertEqual(rearranged_list.next.next.next.next.next.value, 5)

    def test_rearrange_linked_list_case_5(self):
        TestCase5={
            "linkedList": {
                "head": "0",
                "nodes": [
                {"id": "0", "next": "3", "value": 0},
                {"id": "3", "next": "2", "value": 3},
                {"id": "2", "next": "1", "value": 2},
                {"id": "1", "next": "4", "value": 1},
                {"id": "4", "next": "5", "value": 4},
                {"id": "5", "next": "3-2", "value": 5},
                {"id": "3-2", "next": "-1", "value": 3},
                {"id": "-1", "next": "-2", "value": -1},
                {"id": "-2", "next": "3-3", "value": -2},
                {"id": "3-3", "next": "6", "value": 3},
                {"id": "6", "next": "7", "value": 6},
                {"id": "7", "next": "3-4", "value": 7},
                {"id": "3-4", "next": "2-2", "value": 3},
                {"id": "2-2", "next": "-9000", "value": 2},
                {"id": "-9000", "next": None, "value": -9000}
                ]
            },
            "k": -9000
            }
        k = TestCase5['k']
        node_values = []
        for node in TestCase5['linkedList']['nodes']:
            node_values.append(node['value'])
        linkedList = create_linked_list(node_values)
        rearranged_list = rearrangeLinkedList(linkedList, k)

        self.assertEqual(rearranged_list.value, -9000)
        self.assertEqual(rearranged_list.next.value, 0)
        self.assertEqual(rearranged_list.next.next.value, 3)
        self.assertEqual(rearranged_list.next.next.next.value, 2)
        self.assertEqual(rearranged_list.next.next.next.next.value, 1)
        self.assertEqual(rearranged_list.next.next.next.next.next.value, 4)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.value, 5)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.value, 3)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.next.value, -1)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.next.next.value, -2)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.next.next.next.value, 3)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.next.next.next.next.value, 6)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.next.next.next.next.next.value, 7)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.next.next.next.next.next.next.value, 3)
        self.assertEqual(rearranged_list.next.next.next.next.next.next.next.next.next.next.next.next.next.next.value, 2)
        

    
    



