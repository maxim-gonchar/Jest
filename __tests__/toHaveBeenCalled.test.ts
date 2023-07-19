function drinkAll(callback, flavour) {
  if (flavour !== 'apple') {
    callback(flavour);
  }
}

describe('drinkAll', () => {
  test('Apple drink', () => {
    const drink = jest.fn();
    drinkAll(drink, 'orange');
    expect(drink).toHaveBeenCalled();
  });

  test('drink anything except apple drinks', () => {
    const drink = jest.fn();
    drinkAll(drink, 'apple');
    expect(drink).not.toHaveBeenCalled();
  });
});
