import unittest
from problem.classes import CoffeeCup

class TestCoffeeCup(unittest.TestCase):
    def test_capacity(self):
        johnny_cup = CoffeeCup(12)
        dame_cup = CoffeeCup(8)
        self.assertEqual(johnny_cup.capacity, 12)
        self.assertEqual(dame_cup.capacity, 8)





if __name__ == '__main__':
    unittest.main()