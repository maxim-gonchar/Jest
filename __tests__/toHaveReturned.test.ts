test('Function returns', () => {
  const func = jest.fn(() => true);

  func();

  expect(func).toHaveReturned();
});
