import ErrorRepository, { errors } from '../app';

describe('Check validateUsername', () => {
  test.each(errors)(('Test case №%#: check error code %p and string: %p'),
    (code, str) => {
      const error = new ErrorRepository();
      expect(error.translate(code)).toBe(str);
    });

  test.each(errors)(('Test case №%#: check error code %p and string: Unknown error'),
    (code) => {
      const error = new ErrorRepository();
      expect(error.translate(code)).not.toBe('Unknown error');
    });

  test('Test case: checking invalid code', () => {
    const error = new ErrorRepository();
    expect(error.translate(0)).toBe('Unknown error');
  });
});
