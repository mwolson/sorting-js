import uniq from 'uniq/inefficient';

describe('inefficient uniq', () => {
  it('works on duplicates', () => {
    expect(uniq([1, 1, 2])).to.eql([1, 2]);
  });
});
