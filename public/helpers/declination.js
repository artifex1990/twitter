const declitions = (n, decl1, decl2, decl3 = null) => {
  if (n % 10 === 1) {
    return decl1;
  }

  if (n % 10 >= 2 && n % 10 <= 4) {
    return decl2;
  }

  return decl3 ?? decl2;
};

export default declitions;
