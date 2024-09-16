package com.example.algorithms.search;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Test class for the LinearSearch algorithm.
 */
public class LinearSearchTest {

  /**
   * Test method to verify the correctness of the LinearSearch.search method.
   */
  @Test
  public void testLinearSearch() {
    // Test array
    int[] arr = { 1, 3, 5, 7, 9 };

    // Test case 1: Search for an existing element in the middle
    assertEquals(2, LinearSearch.search(arr, 5));

    // Test case 2: Search for the last element
    assertEquals(4, LinearSearch.search(arr, 9));

    // Test case 3: Search for a non-existing element
    assertEquals(-1, LinearSearch.search(arr, 6));

    // Test case 4: Search for the first element
    assertEquals(0, LinearSearch.search(arr, 1));
  }
}
