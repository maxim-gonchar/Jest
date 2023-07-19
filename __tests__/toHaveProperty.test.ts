const person = {
  name: 'Maksym',
  age: 25,
  human: true,
};

test("check person's properties", () => {
  expect(person).toHaveProperty('name');
  expect(person).toHaveProperty('age', 25);
  expect(person).not.toHaveProperty('married');
});
