Product = require("./Product");
module.exports = class BackStageProduct extends Product {
  constructor(...args) {
    super(...args);
  }

  ItemNameIs() {
    this.item.name === "Backstage passes to a TAFKAL80ETC concert";
  }
};
