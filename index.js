function AdvStorage() {
  let storage = _getStorage();

  function set(key, value) {
    if (!!this.storage.find((item) => item.key === key)) {
      const idx = this.storage.findIndex((item) => item.key === key);
      this.storage[idx] = { key, value };
      return this.storage;
    } else {
      localStorage.setItem(key, value);
      const resp = storage.push({ key, value });

      if (resp) {
        return this.storage;
      }
    }
  }

  function get(key) {
    return localStorage.getItem(key);
  }

  function getAll() {
    return this.storage;
  }

  function remove(key) {
    localStorage.removeItem(key);
    const idx = this.storage.findIndex((item) => item.key === key);
    this.storage.splice(idx, 1);
    return this.storage;
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
