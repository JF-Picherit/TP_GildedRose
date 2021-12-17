Product = require("./Product");
module.exports = class SulfurasProduct extends Product {
  constructor(...args) {
    super(...args);
  }

  ItemNameIs() {
    this.item.name === "Sulfuras, Hand of Ragnaros";
  }
};
