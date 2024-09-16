/// Performs a linear search on the given slice to find the target value.
///
/// # Arguments
///
/// * `arr` - A slice of elements to search through.
/// * `target` - The value to search for.
///
/// # Returns
///
/// Returns `Some(index)` if the target is found, where `index` is the position of the target in the slice.
/// Returns `None` if the target is not found.
pub fn linear_search<T: PartialEq>(arr: &[T], target: &T) -> Option<usize> {
    // Iterate through each element in the slice
    for (i, item) in arr.iter().enumerate() {
        // If the current element matches the target, return its index
        if item == target {
            return Some(i);
        }
    }
    // If the target is not found, return None
    None
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_linear_search() {
        // Test array
        let arr = vec![1, 3, 5, 7, 9];

        // Test case 1: Search for an existing element in the middle
        assert_eq!(linear_search(&arr, &5), Some(2));

        // Test case 2: Search for the last element
        assert_eq!(linear_search(&arr, &9), Some(4));

        // Test case 3: Search for a non-existing element
        assert_eq!(linear_search(&arr, &6), None);

        // Test case 4: Search for the first element
        assert_eq!(linear_search(&arr, &1), Some(0));
    }
}
