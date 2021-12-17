Product = require("./Product");
module.exports = class AgedBrieProduct extends Product {
  constructor(...args) {
    super(...args);
  }

  ItemNameIs() {
    this.item.name === "Aged Brie";
  }
};
