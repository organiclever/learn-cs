# Linear Search

Linear search, also known as sequential search, is one of the simplest searching algorithms. It works by sequentially checking each element in a list until a match is found or the entire list has been searched.

## Algorithm Description

The linear search algorithm follows these steps:

1. Start from the first element of the list.
2. Compare the current element with the target value.
3. If the current element matches the target, return its index (search successful).
4. If the current element doesn't match, move to the next element.
5. Repeat steps 2-4 until the element is found or the end of the list is reached.
6. If the end of the list is reached without finding the target, return a value indicating the search was unsuccessful (e.g., -1).

## Pseudocode

```
function linearSearch(arr, target):
    for i from 0 to length(arr) - 1:
        if arr[i] == target:
            return i
    return -1
```

## Implementations

Implementations in different programming languages can be found in: cs-\* folders.

## How is it used?

Linear search is used when the list is not sorted or when the list is small. It is also used in cases where the list is unsorted and the target is not known.

## Performance

Time Complexity: O(n)

- Best Case: O(1) - The target is found at the first element.
- Worst Case: O(n) - The target is found at the last element.
- Average Case: O(n) - The target is found at the middle element.

Space Complexity: O(1)

- The algorithm uses a constant amount of additional space regardless of the size of the input list.
