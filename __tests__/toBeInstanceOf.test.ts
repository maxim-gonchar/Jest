const func = () => {};
const obj = {};
const array = [];
describe('Values should have correct instance', () => {
  test('should be function', () => {
    expect(func).toBeInstanceOf(Function);
  });
  test('should be object', () => {
    expect(obj).toBeInstanceOf(Object);
  });
  test('should be array', () => {
    expect(array).toBeInstanceOf(Array);
  });
});
