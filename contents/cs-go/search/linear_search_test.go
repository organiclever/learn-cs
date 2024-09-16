package search

import "testing"

func TestLinearSearch(t *testing.T) {
	// Test slice
	arr := []int{1, 3, 5, 7, 9}

	testCases := []struct {
		name     string
		target   int
		expected int
	}{
		{"existing element in the middle", 5, 2},
		{"last element", 9, 4},
		{"non-existing element", 6, -1},
		{"first element", 1, 0},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result := LinearSearch(arr, tc.target)
			if result != tc.expected {
				t.Errorf("LinearSearch(%v, %d) = %d; want %d", arr, tc.target, result, tc.expected)
			}
		})
	}
}
