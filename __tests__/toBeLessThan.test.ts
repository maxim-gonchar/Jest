const hoursWorking = () => 8;

test('Hours working should be no more than 8', () => {
  expect(hoursWorking()).toBeLessThan(10);
});
