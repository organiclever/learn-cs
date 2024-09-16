# Search Algorithms

This directory contains explanations and pseudocode for various search algorithms.

## Introduction

Search algorithms are fundamental in computer science, used to find specific items within a collection of data. They are essential for many applications, from simple lookups to complex data retrieval systems.

## Algorithms Covered

Currently, this section covers the following search algorithms:

1. Linear Search
2. Binary Search (coming soon)

Each algorithm has its own markdown file with detailed explanations and pseudocode.

## Linear Search

Linear search is the simplest search algorithm. It sequentially checks each element in a list until a match is found or the end of the list is reached.

Key characteristics:

- Time Complexity: O(n)
- Space Complexity: O(1)
- Best for: Small lists or unsorted data

For more details, see [Linear Search](./linear-search.md).

## Binary Search (Coming Soon)

Binary search is an efficient algorithm for searching sorted arrays. It repeatedly divides the search interval in half, significantly reducing the search space.

Key characteristics:

- Time Complexity: O(log n)
- Space Complexity: O(1) for iterative, O(log n) for recursive
- Best for: Sorted arrays

## Comparing Search Algorithms

When choosing a search algorithm, consider:

1. Is the data sorted?
2. How large is the dataset?
3. How frequently will searches be performed?

Linear search is simple and works on unsorted data, but becomes inefficient for large datasets. Binary search is much faster for large, sorted datasets but requires the data to be sorted first.

## Next Steps

After understanding these algorithms conceptually, check out the language-specific implementations in other directories of this project to see how they're coded in practice.
