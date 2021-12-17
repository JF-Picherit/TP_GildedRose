module.exports = class AgedBrieItem {
  constructor(item) {
    this.item = item;
  }

  ItemNameIs() {
    this.item.name === "Aged Brie";
  }
};
