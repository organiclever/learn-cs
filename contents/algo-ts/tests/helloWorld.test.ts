import helloWorld from '../src/helloWorld';

// TODO: Implement tests for helloWorld function
describe('helloWorld function', () => {
  it('should return "Hello, World!"', () => {
    expect(helloWorld()).toBe('Hello, World!');
  });
});
