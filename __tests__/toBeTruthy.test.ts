const myTea = {
  isHot: true,
};
test('is hot', () => {
  expect(myTea.isHot).toBeTruthy();
});
