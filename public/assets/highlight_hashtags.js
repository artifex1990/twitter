const highlightHashtags = (text) => {
  if (typeof text !== 'string') return text;
  if (!text.includes('#')) return text;

  return text.split(' ').map((word) => {
    const parts = word.split('#');
    if (parts.length <= 1) return word;

    return parts
      .map((tag) => ((!tag) ? '' : `<a href="/search?tag=${tag}">#${tag}</a>`))
      .join('');
  }).join(' ');
};

export default highlightHashtags;
