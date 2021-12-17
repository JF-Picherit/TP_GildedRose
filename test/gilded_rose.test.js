// const {Shop, Item} = require("../src/gilded_rose");
Shop = require("../src/gilded_rose");
Item = require("../src/Item");
AgedBrieProduct = require("../src/Products/AgedBrieProduct");
BackStageProduct = require("../src/Products/BackStageProduct");
SulfurasProduct = require("../src/Products/SulfurasProduct");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should foo", function () {
    const item = new Item("foo", 1, 1);
    const agedBrieProduct = new AgedBrieProduct(item);
    expect(agedBrieProduct.maximumQuality).toBe(50);
  });
});
