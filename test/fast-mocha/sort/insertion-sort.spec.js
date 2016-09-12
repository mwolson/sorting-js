import sort from 'sort/insertion-sort';

describe('insertion sort', () => {
  it('sorts out-of-order list', () => {
    expect(sort([3, 1, 2])).to.eql([1, 2, 3]);
  });
});
