<<<<<<< HEAD
import unittest
from doubly_linked_list import DoublyLinkedList, Node  

class TestDoublyLinkedList(unittest.TestCase):
    def setUp(self):
        self.doubly_linked_list = DoublyLinkedList()
        self.nodes = [
            {"id": "1", "next": None, "prev": None, "value": 1},
            {"id": "2", "next": None, "prev": None, "value": 2},
            {"id": "3", "next": None, "prev": None, "value": 3},
            {"id": "3-2", "next": None, "prev": None, "value": 3},
            {"id": "3-3", "next": None, "prev": None, "value": 3},
            {"id": "4", "next": None, "prev": None, "value": 4},
            {"id": "5", "next": None, "prev": None, "value": 5},
            {"id": "6", "next": None, "prev": None, "value": 6}
        ]

    def test_set_head(self):
        for node_data in self.nodes:
            new_node = Node(node_data["value"])
            if self.doubly_linked_list.head is not None:
                new_node.prev = self.doubly_linked_list.head
                self.doubly_linked_list.head.next = new_node
            self.doubly_linked_list.head = new_node

        self.assertEqual(self.doubly_linked_list.head.value, 6)

    # def test_set_tail(self):
    #     for node_data in self.nodes:
    #         self.doubly_linked_list.setTail(Node(node_data["value"]))
    #     self.assertEqual(self.doubly_linked_list.tail.value, 6)

    # Add more individual test methods for other operations

if __name__ == "__main__":
    unittest.main()

=======
# test
import unittest
from doubly_linked_list import Node, DoublyLinkedList

class TestDoublyLinkedList(unittest.TestCase):

    {
  "nodes": [
    {"id": "1", "next": None, "prev": None, "value": 1},
    {"id": "2", "next": None, "prev": None, "value": 2},
    {"id": "3", "next": None, "prev": None, "value": 3},
    {"id": "3-2", "next": None, "prev": None, "value": 3},
    {"id": "3-3", "next": None, "prev": None, "value": 3},
    {"id": "4", "next": None, "prev": None, "value": 4},
    {"id": "5", "next": None, "prev": None, "value": 5},
    {"id": "6", "next": None, "prev": None, "value": 6}
  ],
  "classMethodsToCall": [
    {
      "arguments": ["5"],
      "method": "setHead"
    },
    {
      "arguments": ["4"],
      "method": "setHead"
    },
    {
      "arguments": ["3"],
      "method": "setHead"
    },
    {
      "arguments": ["2"],
      "method": "setHead"
    },
    {
      "arguments": ["1"],
      "method": "setHead"
    },
    {
      "arguments": ["4"],
      "method": "setHead"
    },
    {
      "arguments": ["6"],
      "method": "setTail"
    },
    {
      "arguments": ["6", "3"],
      "method": "insertBefore"
    },
    {
      "arguments": ["6", "3-2"],
      "method": "insertAfter"
    },
    {
      "arguments": [1, "3-3"],
      "method": "insertAtPosition"
    },
    {
      "arguments": [3],
      "method": "removeNodesWithValue"
    },
    {
      "arguments": ["2"],
      "method": "remove"
    },
    {
      "arguments": [5],
      "method": "containsNodeWithValue"
    }
  ]
}

    def test_array(self):
        self.assertEqual(intro.numbers, [1,2,3,4,5])

    def test_user(self):
        self.assertEqual(intro.user['name'], "LeBron James")
        self.assertEqual(intro.user['age'], 39)

    def test_old_enough(self):
        self.assertEqual(intro.old_enough, True)
    
    def test_artists(self):
        self.assertEqual(intro.artists[0], { "name": "Drake", "albums": 12 })
        self.assertEqual(intro.artists[1]['name'], "KeyGlock")
        self.assertEqual(intro.artists[2]['albums'], 5)
        self.assertEqual(len(intro.artists), 3)

    def test_more_numbers(self):
        self.assertEqual(intro.more_numbers, [45,66,76,45,34,99])
        self.assertEqual(intro.even_more_numbers, [45,66,76,10,45,34])
        self.assertEqual(intro.last_numbers, [45,66,76,45])


    def test_sum_max_min(self):
        """Test for sum, max, and min with an array"""
        self.assertEqual(intro.result, 15)
        self.assertEqual(intro.highest_max, 5)
        self.assertEqual(intro.lowest_min, 1)
    
    

if __name__ == '__main__':
    unittest.main()


def list_to_array(self, head):
        array = []
        current = head
        while current is not None:
            array.append(current.value)
            current = current.next
        return array
>>>>>>> 1cabf0f483df1c013159168ac6843c3e24b41b22
