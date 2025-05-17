const isValidUrl = (url) => {
  if (typeof url !== 'string' || !url) {
    return false;
  }

  const testUrl = !url.startsWith('http://') && !url.startsWith('https://')
    ? `https://${url}`
    : url;

  try {
    const { hostname } = new URL(testUrl);
    const parts = hostname.split('.');

    if (parts.length < 2 || parts.some((part) => !part)) {
      return false;
    }

    for (let part = 0; part < parts.length - 1; part += 1) {
      if (
        parts[part].length > 63
        || parts[part].startsWith('-')
        || parts[part].endsWith('-')
      ) {
        return false;
      }

      for (let index = 0; index < parts[part].length - 1; index += 1) {
        const code = parts[part][index].charCodeAt(0);
        const valid = (
          (code >= 48 && code <= 57)
          || (code >= 97 && code <= 122)
          || (code === 45)
        );

        if (!valid) {
          return false;
        }
      }
    }

    return parts[parts.length - 1].length >= 2;
  } catch (_) {
    return false;
  }
};

export default isValidUrl;
