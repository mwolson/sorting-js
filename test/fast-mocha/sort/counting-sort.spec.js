import sort from 'sort/counting-sort';

describe('counting sort', () => {
  it('rejects non-numeric data', () => {
    expect(() => sort([1, 'two', 3])).to.throw('input is not numeric');
  });
  it('sorts out-of-order list', () => {
    expect(sort([3, 1, 2])).to.eql([1, 2, 3]);
  });
  it('sorts list with duplicates', () => {
    expect(sort([3, 1, 2, 2])).to.eql([1, 2, 2, 3]);
  });
  it('sorts list with gaps', () => {
    expect(sort([4, 1, 2])).to.eql([1, 2, 4]);
  });
});
