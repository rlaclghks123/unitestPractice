const mock = require("../src/mock/mock.js");

describe("mockTest", () => {
  test("Test 1 : old version - calls.length", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    mock([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test("Test 2 : old version - calls[0][0] ", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    mock([0, 1], mockCallback);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  test("Test 2 : old version - calls[0][1] ", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    mock([0, 1], mockCallback);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});

describe("mockTest", () => {
  test("Test 1 : using API version - toBeCalledTimes", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    mock([0, 1], mockCallback);
    expect(mockCallback).toBeCalledTimes(2);
  });

  test("Test 2 : using API version -toBeCalledWitdh ", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    mock([0, 1], mockCallback);
    expect(mockCallback).toBeCalledWith(0 || 1);
  });
});
