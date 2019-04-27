const twoFer = require('./../src/twoFer');

describe('twoFer', () => {
  it('builds a twoFer string with the given name', () => {
    expect(twoFer('Me')).toBe('One for Me, and one for me.');
  });
  it.todo('defaults to "you" when name is not provided');
});
