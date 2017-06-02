import { ExcerptPipe } from './excerpt.pipe';

describe('ExcerptPipe', () => {
  const pipe = new ExcerptPipe();
  const testString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('should generate an excerpt of 20 words', () => {
      const words = pipe.transform(testString)
        .split(' ');

      expect(words.length).toBe(21);
      expect(words[20]).toBe('…');
    });

    it('should generate an excerpt of specified word count', () => {
      const words = pipe.transform(testString, 12)
        .split(' ');

      expect(words.length).toBe(13);
      expect(words[12]).toBe('…');
    });

    it('should generate an excerpt and strip special chars', () => {
      const words = pipe.transform(testString, 12, '.');
      expect(words).not.toContain('.');
    });

  });
});
