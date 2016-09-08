import uniq from 'uniq/assume-sorted';

describe('uniq on contents assumed to be sorted already', () => {
  it('works on duplicates', () => {
    expect(uniq([1, 1, 2])).to.eql([1, 2]);
  });
});
