const { forEach, testMock } = require('../mock');

const mockCallback = jest.fn((x) => 42 + x);

describe('forEach test', () => {
  test('forEach mock function', () => {
    forEach([0, 1, 7], mockCallback);

    // expect(mockCallback.mock.calls).toHaveLength(3);
    expect(mockCallback).toHaveBeenCalledTimes(3);

    // expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback).toHaveBeenCalledWith(0);

    // expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback).toHaveBeenCalledWith(1);

    // expect(mockCallback.mock.calls[2][0]).toBe(7);
    expect(mockCallback).toHaveBeenCalledWith(7);

    expect(mockCallback.mock.results[0].value).toBe(42);

    expect(mockCallback.mock.results[1].value).toBe(43);

    expect(mockCallback.mock.results[2].value).toBe(49);
  });
});

describe('testMock test', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  test('test mock function when input is true', () => {
    testMock(() => true, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('ok');
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  test('test mock function when input is false', () => {
    testMock(() => false, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
  });
});
