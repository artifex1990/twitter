const getData = async (api) => {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    return new Error(error);
  }
};

export default getData;
