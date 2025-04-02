import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', () => {
  it('без ссылок', () => {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });

  it('с http ссылкой', () => {
    const expectedResult = 22;
    const result = postSize('Вот ссылка: http://example.com проверьте');
    assert.equal(expectedResult, result);
  });

  it('с https ссылкой', () => {
    const expectedResult = 22;
    const result = postSize('Вот ссылка: https://example.com проверьте');
    assert.equal(expectedResult, result);
  });

  it('с www ссылкой', () => {
    const expectedResult = 22;
    const result = postSize('Вот ссылка: www.example.com проверьте');
    assert.equal(expectedResult, result);
  });

  it('со ссылкой в конце', () => {
    const expectedResult = 11;
    const result = postSize('Ссылка тут http://example.com');
    assert.equal(expectedResult, result);
  });

  it('со ссылкой в начале', () => {
    const expectedResult = 11;
    const result = postSize('http://example.com Ссылка тут');
    assert.equal(expectedResult, result);
  });

  it('только ссылка', () => {
    const expectedResult = 0;
    const result = postSize('http://example.com');
    assert.equal(expectedResult, result);
  });

  it('несколько ссылок', () => {
    const expectedResult = 24;
    const result = postSize('Ссылки: http://example1.com и www.example2.com проверьте их');
    assert.equal(expectedResult, result);
  });

  it('с пробелами и ссылкой', () => {
    const expectedResult = 19;
    const result = postSize('Много   пробелов   http://example.com');
    assert.equal(expectedResult, result);
  });

  it('со спецсимволами', () => {
    const expectedResult = 13;
    const result = postSize('Привет! @#$% http://example.com');
    assert.equal(expectedResult, result);
  });

  it('с эмодзи', () => {
    const expectedResult = 10;
    const result = postSize('Привет! 😊 http://example.com');
    assert.equal(expectedResult, result);
  });
});
