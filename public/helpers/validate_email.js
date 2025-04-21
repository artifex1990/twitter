const validateEmail = (email) => {
  const atIndex = email.indexOf('@');

  if (atIndex < 1 || atIndex === email.length - 1) return false;
  if (email.includes(' ')) return false;

  const domain = email.slice(atIndex + 1);
  const dotIndex = domain.indexOf('.');

  return dotIndex > 0 && dotIndex < domain.length - 1;
};

export default validateEmail;
