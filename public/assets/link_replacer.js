import isValidUrl from '../helpers/is_valid_url.js';

const linkReplacer = (text) => {
  if (typeof text !== 'string') return text;

  return text
    .split(' ')
    .map((word) => {
      const protocol = word.startsWith('https://') || word.startsWith('http://') ? '' : 'https://';
      return isValidUrl(word) ? `<a href="${protocol}${word}">${word}</a>` : word;
    })
    .join(' ');
};

export default linkReplacer;
