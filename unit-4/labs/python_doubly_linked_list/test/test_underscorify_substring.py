import unittest
from underscorify_substring import underscorify_substring

class TestScorify(unittest.TestCase):
    def test_underscorify_1(self):
        string = "this is a test to see if testestest it works"
        substring = "test"
        expected = "this is a _test_ to see if _testestest_ it works"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_2(self):
        string = "testthis is a testtest to see if testestest it works"
        substring = "test"
        expected = "_test_this is a _testtest_ to see if _testestest_ it works"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_3(self):
        string = "test this is a test to see if it works"
        substring = "test"
        expected = "_test_ this is a _test_ to see if it works"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_4(self):
        string = "testthis is a test to see if it works"
        substring = "test"
        expected = "_test_this is a _test_ to see if it works"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_5(self):
        string = "testthis is a testest to see if testestes it works"
        substring = "test"
        expected = "_test_this is a _testest_ to see if _testest_es it works"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_6(self):
        string = "this is a test to see if it works and test"
        substring = "test"
        expected = "this is a _test_ to see if it works and _test_"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_7(self):
        string = "this is a test to see if it works and test"
        substring = "bfjawkfja"
        expected = "this is a test to see if it works and test"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_8(self):
        string = "ttttttttttttttbtttttctatawtatttttastvb"
        substring = "ttt"
        expected = "_tttttttttttttt_b_ttttt_ctatawta_ttttt_astvb"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_9(self):
        string = "tzttztttz"
        substring = "ttt"
        expected = "tzttz_ttt_z"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_10(self):
        string = "abababababababababababababaababaaabbababaa"
        substring = "a"
        expected = "_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_aa_b_a_b_aaa_bb_a_b_a_b_aa_"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
    def test_underscorify_11(self):
        string = "abcabcabcabcabcabcabcabcabcabcabcabcabcabc"
        substring = "abc"
        expected = "_abcabcabcabcabcabcabcabcabcabcabcabcabcabc_"
        self.assertEqual(underscorify_substring(string, substring), expected)
        
if __name__ == "__main__":
    unittest.main()

