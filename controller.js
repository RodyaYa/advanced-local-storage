const formController = {
  elements: {
    key: document.getElementById("key"),
    value: document.getElementById("value"),
    add: document.getElementById("addBtn"),
  },
  keyName: "",
  valueName: "",
  setKey(value) {
    this.keyName = value;
  },
  setValue(value) {
    this.valueName = value;
  },
  getKey() {
    return this.keyName;
  },
  getValue() {
    return this.valueName;
  },
  clear() {
    this.keyName = this.valueName = "";
    const { key: keyInp, value: valInp } = this.elements;
    keyInp.value = "";
    valInp.value = "";
  },
  async addBtnListener() {
    const promise = await advs.set(this.getKey(), this.getValue());
    this.clear();
    this.renderList(promise);
  },
  _initEvent() {
    const { key, value, add } = this.elements;
    key.addEventListener("input", this.keyListener.bind(this));
    value.addEventListener("input", this.valueListener.bind(this));
    add.addEventListener("click", this.addBtnListener.bind(this));
  },
  keyListener(event) {
    this.setKey(event.target.value);
  },
  valueListener(event) {
    this.setValue(event.target.value);
  },
  renderList(arr) {
    const html = arr.map((item) => {
      return `<div class="list-group-item shadow-sm"><strong class="pr-3">${item.key} : </strong> ${item.value}</div>`;
    });
    if (!html.length) {
      html.push(`<div>Local storage empty...</div>`);
    }
    document.getElementById("listContainer").innerHTML = html.join("");
  },
  init() {
    this._initEvent();
    this.renderList(advs.storage);
  },
};

formController.init();
