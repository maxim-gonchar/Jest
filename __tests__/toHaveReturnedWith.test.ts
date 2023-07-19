const userWithName = {name: 'Maksym'};
test('function returns my name', () => {
  const userFunc = jest.fn(obj => obj.name);

  userFunc(userWithName);

  expect(userFunc).toHaveReturnedWith('Maksym');
});
test('function should not return my name', () => {
  const userFunc = jest.fn(obj => obj.name);

  userFunc(userWithName);

  expect(userFunc).not.toHaveReturnedWith('Honcahr');
});
