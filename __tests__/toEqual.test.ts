const obj1 = {
  job: 'programmer',
  experience: 5,
};
const obj2 = {
  job: 'programmer',
  experience: 1,
};
const obj3 = {
  job: 'programmer',
  experience: 1,
};
describe('Should or should not have the same properies', () => {
  test('have all the same properties', () => {
    expect(obj2).toEqual(obj3);
  });
  test('are not the same', () => {
    expect(obj1).not.toEqual(obj2);
  });
});
