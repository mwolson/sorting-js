import sort from 'sort/merge-sort';

describe('merge sort', () => {
  it('sorts 0-length', () => {
    expect(sort([])).to.eql([]);
  });
  it('sorts 1-length', () => {
    expect(sort([0])).to.eql([0]);
  });
  it('sorts 2-length', () => {
    expect(sort([1, 0])).to.eql([0, 1]);
  });
  it('sorts 3-length', () => {
    expect(sort([3, 1, 2])).to.eql([1, 2, 3]);
  });
  it('sorts 6-length', () => {
    expect(sort([3, 1, 2, 6, 5, 4])).to.eql([1, 2, 3, 4, 5, 6]);
  });
  it('sorts 7-length', () => {
    expect(sort([3, 1, 2, 6, 3, 5, 4])).to.eql([1, 2, 3, 3, 4, 5, 6]);
  });
});
