function returnNull() {
  return null;
}
function returnNumber() {
  return 1;
}

test('function returns null', () => {
  expect(returnNull()).toBeNull();
});

test('function does not return null', () => {
  expect(returnNumber()).not.toBeNull();
});
