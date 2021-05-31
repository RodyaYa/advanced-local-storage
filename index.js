function AdvStorage() {
  let storage = _initStorage();

  function set(key, value) {
    localStorage.setItem(key, value);
    this.storage.push({ key, value });
  }

  function get(key) {
    return localStorage.getItem(key);
  }

  function getAll() {
    return _initStorage();
  }

  function remove(key) {
    localStorage.removeItem(key);
    return (this.storage = this.storage.filter((item) => item.key !== key));
  }

  function _initStorage() {
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
