package search

// LinearSearch performs a linear search on the given slice to find the target value.
// It returns the index of the target if found, or -1 if not found.
func LinearSearch[T comparable](arr []T, target T) int {
	// Iterate through each element in the slice
	for i, v := range arr {
		// If the current element matches the target, return its index
		if v == target {
			return i
		}
	}
	// If the target is not found, return -1
	return -1
}
