import unittest
import problem.intro as intro 
# from problem.intro import numbers, user, old_enough

class TestIntro(unittest.TestCase):

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