import {countries} from './counries';

describe('countries', () => {
  it('should contain countries codes', function () {
    const result = countries();
    expect(result).toContain('UA');
  });
})

