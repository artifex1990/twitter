import declitions from '../helpers/declination.js';
import isDate from '../helpers/is_date.js';

const convertTime = (postDate, currentDate = new Date(Date.now())) => {
  if (!isDate(postDate) || !isDate(currentDate)) {
    return '';
  }

  const res = currentDate - postDate;
  const [years, months, days, hours, minutes, seconds] = [
    Math.floor(res / 1000 / 60 / 60 / 24 / 30 / 12),
    Math.floor(res / 1000 / 60 / 60 / 24 / 30),
    Math.floor(res / 1000 / 60 / 60 / 24),
    Math.floor(res / 1000 / 60 / 60),
    Math.floor(res / 1000 / 60),
    Math.floor(res / 1000),
  ];

  const genTimeStringOfBack = (time, declition) => `${time} ${declitions(time, ...declition)} назад`;

  switch (true) {
    case years >= 1:
      return `${genTimeStringOfBack(years, ['год', 'года', 'лет'])}`;
    case months >= 1:
      return `${genTimeStringOfBack(months, ['месяц', 'месяца', 'месяцев'])}`;
    case days >= 1:
      return `${genTimeStringOfBack(days, ['день', 'дня', 'дней'])}`;
    case hours >= 1:
      return `${genTimeStringOfBack(hours, ['час', 'часа', 'часов'])}`;
    case minutes >= 1:
      return `${genTimeStringOfBack(minutes, ['минута', 'минуты', 'минут'])}`;
    case seconds >= 1:
      return `${genTimeStringOfBack(seconds, ['секунда', 'секунды', 'секунд'])}`;
    default:
      return 'только что';
  }
};

export default convertTime;
