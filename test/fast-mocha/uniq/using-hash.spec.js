import uniq from 'uniq/using-hash';

describe('uniq using hash lookup', () => {
  it('works on duplicates', () => {
    expect(uniq([1, 1, 2])).to.eql([1, 2]);
  });
});
