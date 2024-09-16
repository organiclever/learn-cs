import helloWorld from "../src/helloWorld";

describe("helloWorld function", () => {
  it('should return "Hello, World!"', () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
