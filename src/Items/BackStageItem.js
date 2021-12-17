module.exports = class BackStageItem {
  constructor(item) {
    this.item = item;
  }

  ItemNameIs() {
    this.item.name === "Backstage passes to a TAFKAL80ETC concert";
  }
};
