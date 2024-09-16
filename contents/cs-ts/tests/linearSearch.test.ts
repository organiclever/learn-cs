import { linearSearch } from '../src/search/linearSearch';

describe('linearSearch', () => {
  test('finds element in the array', () => {
    expect(linearSearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  test('returns -1 when element is not in the array', () => {
    expect(linearSearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  test('works with strings', () => {
    expect(linearSearch(['apple', 'banana', 'cherry'], 'banana')).toBe(1);
  });

  test('returns first occurrence of duplicate elements', () => {
    expect(linearSearch([1, 2, 3, 2, 4], 2)).toBe(1);
  });

  test('works with empty array', () => {
    expect(linearSearch([], 5)).toBe(-1);
  });
});
