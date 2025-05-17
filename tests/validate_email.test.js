import { assert } from 'chai';
import validateEmail from '../public/helpers/validate_email';

describe('Функция замены ссылок в тексте', function () {
  it('валидный email: example@example.com', function () {
    const result = validateEmail('example@example.com');
    assert.equal(result, true);
  });

  it('невалидный email: example.com (нет @)', function () {
    const result = validateEmail('example.com');
    assert.equal(result, false);
  });

  it('невалидный email: example@.com (точка сразу после @)', function () {
    const result = validateEmail('example@.com');
    assert.equal(result, false);
  });

  it('валидный email: example.name@example.com (с точкой в локальной части)', function () {
    const result = validateEmail('example.name@example.com');
    assert.equal(result, true);
  });

  it('невалидный email: example@com (нет точки в домене)', function () {
    const result = validateEmail('example@com');
    assert.equal(result, false);
  });

  it('невалидный email: example@ (нет домена)', function () {
    const result = validateEmail('example@');
    assert.equal(result, false);
  });

  it('невалидный email: example (только локальная часть)', function () {
    const result = validateEmail('example');
    assert.equal(result, false);
  });

  it('невалидный email: пустая строка', function () {
    const result = validateEmail('');
    assert.equal(result, false);
  });
});
