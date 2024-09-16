/**
 * Performs a linear search on the given array to find the target value.
 *
 * @param arr - The array to search through.
 * @param target - The value to search for.
 * @returns The index of the target if found, or -1 if not found.
 */
export function linearSearch<T>(arr: T[], target: T): number {
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target, return its index
    if (arr[i] === target) {
      return i;
    }
  }
  // If the target is not found, return -1
  return -1;
}
