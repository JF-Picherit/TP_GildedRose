Product = require("./Product");
module.exports = class BackStageProduct extends Product {
  constructor(...args) {
    super(...args);
  }

  updateItem() {
    let i = 1;
    if (this.item.sellIn < 1) {
      i = -this.item.quality;
    } else if (this.item.sellIn < 6) {
      i = 3;
    } else if (this.item.sellIn < 11) {
      i = 2;
    }

    this.setQuality(this.item.quality + i);
    this.item.sellIn -= 1;
  }

};
