const fixTime = (date) => {
  let [d, t] = date.split(' ');
  d = d.split('.').reverse().join('-');
  t = t.length !== 5 ? `0${t}` : t;

  return new Date([d, 'T', t].join(''));
};

export default fixTime;
