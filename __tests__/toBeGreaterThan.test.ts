const numberOfYears = (number: number) => number;

test('Number of years is more than 10', () => {
  expect(numberOfYears(25)).toBeGreaterThan(10);
});

test('Number of years is not more than 10', () => {
  expect(numberOfYears(5)).not.toBeGreaterThan(10);
});
