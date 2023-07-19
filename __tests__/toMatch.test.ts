const str1 = 'Hi, my name is';
const str2 = 'Hi my name is';
const str3 = 'Hi, my name is';
describe('Check if strings are matched', () => {
  test('strings should match', () => {
    expect(str1).toMatch(str3);
  });
  test('strings should not match', () => {
    expect(str1).not.toMatch(str2);
  });
});
