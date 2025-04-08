import { assert } from 'chai';
import linkReplacer from '../public/assets/link_replacer.js';

describe('Функция замены ссылок в тексте', () => {
  it('без ссылок', () => {
    const expectedResult = 'Просто текст без ссылок';
    const result = linkReplacer('Просто текст без ссылок');
    assert.equal(expectedResult, result);
  });

  it('с http ссылкой', () => {
    const expectedResult = 'Ссылка: <a href="http://example.com">http://example.com</a>';
    const result = linkReplacer('Ссылка: http://example.com');
    assert.equal(expectedResult, result);
  });

  it('с https ссылкой', () => {
    const expectedResult = 'Ссылка: <a href="https://example.com">https://example.com</a>';
    const result = linkReplacer('Ссылка: https://example.com');
    assert.equal(expectedResult, result);
  });

  it('с www ссылкой', () => {
    const expectedResult = 'Ссылка: <a href="https://www.example.com">www.example.com</a>';
    const result = linkReplacer('Ссылка: www.example.com');
    assert.equal(expectedResult, result);
  });

  it('со ссылкой в конце', () => {
    const expectedResult = 'Перейдите на <a href="http://site.ru">http://site.ru</a>';
    const result = linkReplacer('Перейдите на http://site.ru');
    assert.equal(expectedResult, result);
  });

  it('со ссылкой в начале', () => {
    const expectedResult = '<a href="https://start.com">https://start.com</a> это начало';
    const result = linkReplacer('https://start.com это начало');
    assert.equal(expectedResult, result);
  });

  it('только ссылка', () => {
    const expectedResult = '<a href="http://only.com">http://only.com</a>';
    const result = linkReplacer('http://only.com');
    assert.equal(expectedResult, result);
  });

  it('несколько ссылок', () => {
    const expectedResult = 'Ссылки: <a href="http://one.com">http://one.com</a> и <a href="https://two.com">https://two.com</a>';
    const result = linkReplacer('Ссылки: http://one.com и https://two.com');
    assert.equal(expectedResult, result);
  });

  it('с пробелами вокруг ссылки', () => {
    const expectedResult = 'Много   пробелов   <a href="http://space.com">http://space.com</a>';
    const result = linkReplacer('Много   пробелов   http://space.com');
    assert.equal(expectedResult, result);
  });

  it('со спецсимволами и ссылкой', () => {
    const expectedResult = 'Символы @#$% и <a href="http://spec.com">http://spec.com</a>';
    const result = linkReplacer('Символы @#$% и http://spec.com');
    assert.equal(expectedResult, result);
  });
});
