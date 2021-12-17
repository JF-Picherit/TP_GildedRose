Product = require("./Product");
module.exports = class AgedBrieProduct extends Product {
  constructor(...args) {
    super(...args);
  }

   updateItem() {
    this.item.sellIn -= 1;
    this.setQuality(this.item.quality + ((this.item.sellIn < 0) ? 2 : 1));
  }
};
