const user = {
  name: 'Maksym',
  age: 25,
};

describe('user', () => {
  test('Should be 25 years old', () => {
    expect(user.age).toBe(25);
  });

  test('has a name', () => {
    expect(user.name).toBe('Maksym');
  });
});
