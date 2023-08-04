const minReorder = require('./min-reorder');

test('1', () => {
  expect(minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]])).toBe(3);
});