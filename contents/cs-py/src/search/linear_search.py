def linear_search(arr: list, target) -> int:
    """
    Performs a linear search on the given array to find the target value.

    Args:
        arr (list): The array to search through.
        target: The value to search for.

    Returns:
        int: The index of the target if found, or -1 if not found.
    """
    # Iterate through each element in the array
    for i in range(len(arr)):
        # If the current element matches the target, return its index
        if arr[i] == target:
            return i
    # If the target is not found, return -1
    return -1
