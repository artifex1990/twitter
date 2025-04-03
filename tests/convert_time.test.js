import { assert } from 'chai';
import convertTime from '../public/assets/convert_time.js';

describe('Функция проверки расчета времени', () => {
  it('когда пост был создан: только что', () => {
    const expectedResult = 'только что';
    const result = convertTime(new Date(Date.now()), new Date(Date.now()));
    assert.equal(expectedResult, result);
  });

  it('когда пост был создан: 4 секунды назад', () => {
    const expectedResult = '4 секунды назад';
    const seconds = 4 * 1000;
    const result = convertTime(new Date(Date.now() - seconds), new Date(Date.now()));
    assert.equal(expectedResult, result);
  });

  it('когда пост был создан: 15 минут назад', () => {
    const expectedResult = '15 минут назад';
    const minutes = 15 * 60 * 1000;
    const result = convertTime(new Date(Date.now() - minutes), new Date(Date.now()));
    assert.equal(expectedResult, result);
  });

  it('когда пост был создан: 8 часов назад', () => {
    const expectedResult = '8 часов назад';
    const hours = 8 * 60 * 60 * 1000;
    const result = convertTime(new Date(Date.now() - hours), new Date(Date.now()));
    assert.equal(expectedResult, result);
  });

  it('когда пост был создан: 21 день назад', () => {
    const expectedResult = '21 день назад';
    const days = 21 * 24 * 60 * 60 * 1000;
    const result = convertTime(new Date(Date.now() - days), new Date(Date.now()));
    assert.equal(expectedResult, result);
  });

  it('когда пост был создан: 6 месяцев назад', () => {
    const expectedResult = '6 месяцев назад';
    const months = 6 * 30 * 24 * 60 * 60 * 1000;
    const result = convertTime(new Date(Date.now() - months), new Date(Date.now()));
    assert.equal(expectedResult, result);
  });

  it('когда пост был создан: 2 года назад', () => {
    const expectedResult = '2 года назад';
    const year = 2 * 12 * 30 * 24 * 60 * 60 * 1000;
    const result = convertTime(new Date(Date.now() - year), new Date(Date.now()));
    assert.equal(expectedResult, result);
  });

  it('когда пост был создан: проверка дат из переданных строк', () => {
    assert.equal(convertTime(new Date('2022-01-01T12:00:00Z'), new Date('2022-01-01T13:01:00Z')), '1 час назад');
    assert.equal(convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-02T00:00:00Z')), '1 день назад');
    assert.equal(convertTime(new Date('2021-01-01T00:00:00Z'), new Date('2022-01-01T00:00:00Z')), '1 год назад');
  });
});
