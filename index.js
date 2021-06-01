function AdvStorage() {
  let storage = _getStorage();

  function set(key, value) {
    localStorage.setItem(key, value);
    return _getStorage();
  }

  function get(key) {
    return localStorage.getItem(key);
  }

  function getAll() {
    return _getStorage();
  }

  function remove(key) {
    localStorage.removeItem(key);
  }

  function _getStorage() {
    return Object.keys(localStorage).map((key) => {
      const value = localStorage.getItem(key);
      return { key, value };
    });
  }

  return {
    storage,
    set,
    get,
    getAll,
    remove,
  };
}

const advs = AdvStorage();
