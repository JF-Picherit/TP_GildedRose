module.exports = class SulfurasItem {
  constructor(item) {
    this.item = item;
  }

  ItemNameIs() {
    this.item.name === "Sulfuras, Hand of Ragnaros";
  }
};
