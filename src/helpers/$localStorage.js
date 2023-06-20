const set = (key, item) => {
  try {
    if (item === null) {
      throw new Error(`"${item}" cannot be added to local storage}`);
    }
    const serializedData = JSON.stringify(item);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error('Local Storage "set" state error', err.message);
  }
};

const get = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error('Local Storage "get" state error', err.message);
  }
};

export default { set, get };
