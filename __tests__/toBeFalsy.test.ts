const myCoffe = {
  isCold: false,
};
test('is not cold', () => {
  expect(myCoffe.isCold).toBeFalsy();
});
