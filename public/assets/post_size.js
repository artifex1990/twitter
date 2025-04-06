import isEmodzy from '../helpers/is_emodzy.js';

const postSize = (post) => {
  let count = 0;
  let i = 0;
  const n = post.length;

  while (i < n) {
    const isHttpLink = post.startsWith('http://', i) || post.startsWith('https://', i);
    const isWwwLink = post.startsWith('www.', i);

    if (isHttpLink || isWwwLink) {
      while (i < n && post[i] !== ' ') {
        i += 1;
      }
    } else {
      i += isEmodzy(post[i]) ? 2 : 1;
      count += 1;
    }
  }

  return count;
};

export default postSize;
