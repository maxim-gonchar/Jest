test('check if correct length number', () => {
  expect(['a', 'b', 'c']).toHaveLength(3);
  expect('abc').toHaveLength(3);
});
