# import unittest
# from problem.deliverable import this_works, count_score, ppl, peeps, adults, is_prime, tripler, cat_builder

# class TestDeliverable(unittest.TestCase):

#     def test_boolean(self):
#         self.assertTrue(this_works)

#     def test_count_scores(self):
#         self.assertDictEqual(count_score(ppl), { "Pete": 2, "Mike": 10, "Dexter": 12 })
#         self.assertDictEqual(count_score(peeps), { "Pete": 4, "Mike": 4, "Dexter": 6 })

#     def test_adults(self):
#         group_a = [
#             { "name": 'Khalid Robinson', "age": 22 },
#             { "name": 'Ariel Winter', "age": 20 },
#             { "name": 'Post Malone', "age": 25 },
#             { "name": 'Willow Smith', "age": 17 }
#         ]

#         group_b = [
#             { "name": 'John Smith', "age": 19 },
#             { "name": 'Elon Musk', "age": 51 },
#             { "name": 'Taylor Swift', "age": 30 },
#             { "name": 'Ice Spice', "age": 20 }
#         ]
#         self.assertListEqual(adults(group_a), [ 'Khalid Robinson', 'Post Malone' ])
#         self.assertListEqual(adults(group_b), [ 'Elon Musk', 'Taylor Swift' ])


#     def test_is_prime(self):
#         self.assertEqual(is_prime(2), True)
#         self.assertEqual(is_prime(10), False)
#         self.assertEqual(is_prime(11), True)
#         self.assertEqual(is_prime(9), False)
#         self.assertEqual(is_prime(2017), True)

#     def test_tripler(self):
#         self.assertListEqual(tripler([1,2,3]), [ 3, 6, 9 ])
#         self.assertListEqual(tripler([4, 1, 7]), [ 12, 3, 21 ])

#     def test_cat_builder(self):
#         self.assertDictEqual(cat_builder('Garfield', 'golden', ['scratching-post', 'yarn']), { "name": 'Garfield', "color": 'golden', "toys": ['scratching-post', 'yarn'] })
#         self.assertDictEqual(cat_builder('Whiskers', 'rainbow', ['poptarts']), { "name": 'Whiskers', "color": 'rainbow', "toys": [ 'poptarts' ] })
    

# if __name__ == '__main__':
#     unittest.main()