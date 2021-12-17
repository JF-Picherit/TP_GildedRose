Product = require("./Products/Product");
AgedBrieProduct = require("./Products/AgedBrieProduct");
BackStageProduct = require("./Products/BackStageProduct");
SulfurasProduct = require("./Products/SulfurasProduct");

const AGED_BRIE = "Aged Brie";
const BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      switch (item.name) {
        case AGED_BRIE:
          const agedBrieProduct = new AgedBrieProduct(item);
          agedBrieProduct.updateItem();
          break;

        case BACKSTAGE:
          const backStageProduct = new BackStageProduct(item);
          backStageProduct.updateItem();
          break;

        case SULFURAS:
          // on ne se sert pas de l'importation de Sulfura
          // car pour l'instant ses propriétés ne changent jamais.
          break;

        default:
          const product = new Product(item);
          product.updateItem();
      }
    });

    return this.items;
  }
};
