import { generateRandomString } from '../../src/util/generateRandomString';

describe('generateRandomString', () => {
  it('should generate a string with length 16', () => {
    for (let i = 0; i < 100; i++) {
      expect(generateRandomString().length).toEqual(16);
    }
  });

  it('should only use alphanumerical characters', () => {
    const randomString = generateRandomString();
    expect(randomString.match(/[0-9A-Z]{16}/)?.length).toEqual(1);
  });
});