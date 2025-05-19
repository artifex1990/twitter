import { assert } from 'chai';
import highlightHashtags from '../public/assets/highlight_hashtags.js';

describe('Функция highlightHashtags', function () {
  it('должна обрабатывать одиночный хэш-тег в середине текста', function () {
    const result = highlightHashtags('Кто еще изучает #javascript ?');
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> ?';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать хэш-тег в начале строки', function () {
    const result = highlightHashtags('#привет мир!');
    const expectedResult = '<a href="/search?tag=привет">#привет</a> мир!';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать хэш-тег в конце строки', function () {
    const result = highlightHashtags('Это тест #тестирование');
    const expectedResult = 'Это тест <a href="/search?tag=тестирование">#тестирование</a>';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать несколько хэш-тегов', function () {
    const result = highlightHashtags('#сегодня я изучил #react и #nodejs');
    const expectedResult = '<a href="/search?tag=сегодня">#сегодня</a> я изучил <a href="/search?tag=react">#react</a> и <a href="/search?tag=nodejs">#nodejs</a>';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать хэш-теги с цифрами', function () {
    const result = highlightHashtags('Версия 2.0 #web3 #ai2023');
    const expectedResult = 'Версия 2.0 <a href="/search?tag=web3">#web3</a> <a href="/search?tag=ai2023">#ai2023</a>';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать пустую строку', function () {
    const result = highlightHashtags('');
    const expectedResult = '';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать строку без хэш-тегов', function () {
    const result = highlightHashtags('Просто обычный текст без тегов');
    const expectedResult = 'Просто обычный текст без тегов';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать специальные символы в хэш-тегах', function () {
    const result = highlightHashtags('Проверка #тест-дефиса и #подчёркивание_теста');
    const expectedResult = 'Проверка <a href="/search?tag=тест-дефиса">#тест-дефиса</a> и <a href="/search?tag=подчёркивание_теста">#подчёркивание_теста</a>';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать смежные хэш-теги', function () {
    const result = highlightHashtags('Смежные #тег1#тег2 теги');
    const expectedResult = 'Смежные <a href="/search?tag=тег1">#тег1</a><a href="/search?tag=тег2">#тег2</a> теги';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать подряд идущие хэштеги', function () {
    const result = highlightHashtags('#tag1#tag2');
    const expectedResult = '<a href="/search?tag=tag1">#tag1</a><a href="/search?tag=tag2">#tag2</a>';
    assert.equal(result, expectedResult);
  });

  it('должна обрабатывать хэш-теги с не-ASCII символами', function () {
    const result = highlightHashtags('Тест с #кириллицей и #日本語');
    const expectedResult = 'Тест с <a href="/search?tag=кириллицей">#кириллицей</a> и <a href="/search?tag=日本語">#日本語</a>';
    assert.equal(result, expectedResult);
  });
});
