import { assert } from 'chai';
import validateEmail from '../public/helpers/validate_email.js';

describe('Функция замены ссылок в тексте', () => {
  it('валидный email: example@example.com', () => {
    const result = validateEmail('example@example.com');
    assert.equal(result, true);
  });

  it('невалидный email: example.com (нет @)', () => {
    const result = validateEmail('example.com');
    assert.equal(result, false);
  });

  it('невалидный email: example@.com (точка сразу после @)', () => {
    const result = validateEmail('example@.com');
    assert.equal(result, false);
  });

  it('валидный email: example.name@example.com (с точкой в локальной части)', () => {
    const result = validateEmail('example.name@example.com');
    assert.equal(result, true);
  });

  it('невалидный email: example@com (нет точки в домене)', () => {
    const result = validateEmail('example@com');
    assert.equal(result, false);
  });

  it('невалидный email: example@ (нет домена)', () => {
    const result = validateEmail('example@');
    assert.equal(result, false);
  });

  it('невалидный email: example (только локальная часть)', () => {
    const result = validateEmail('example');
    assert.equal(result, false);
  });

  it('невалидный email: пустая строка', () => {
    const result = validateEmail('');
    assert.equal(result, false);
  });
});
