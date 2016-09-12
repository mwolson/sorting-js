import sort from 'sort/selection-sort';

describe('selection sort', () => {
  it('sorts out-of-order list', () => {
    expect(sort([3, 1, 2])).to.eql([1, 2, 3]);
  });
});
