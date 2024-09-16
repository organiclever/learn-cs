import unittest
from src.search.linear_search import linear_search


class TestLinearSearch(unittest.TestCase):
    def test_linear_search(self):
        # Test array
        arr = [1, 3, 5, 7, 9]

        # Test case 1: Search for an existing element in the middle
        self.assertEqual(2, linear_search(arr, 5))

        # Test case 2: Search for the last element
        self.assertEqual(4, linear_search(arr, 9))

        # Test case 3: Search for a non-existing element
        self.assertEqual(-1, linear_search(arr, 6))

        # Test case 4: Search for the first element
        self.assertEqual(0, linear_search(arr, 1))


if __name__ == '__main__':
    unittest.main()
