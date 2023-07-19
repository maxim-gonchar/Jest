describe('arrayContaining', () => {
  const expectedArray = ['Maksym', 'Honchar'];
  test('matches even if received contains additional elements', () => {
    expect(['Maksym', 'Honchar', 'Eve']).toEqual(
      expect.arrayContaining(expectedArray),
    );
  });
});
