ShopName = require("./ShopName");
ShopQuality = require("./ShopQuality");
ShopSellIn = require("./ShopSellIn");
ItemRender = require("./ItemRender");

module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      const shopName = new ShopName(item.name);
      const shopQuality = new ShopQuality(item.quality);
      const shopSellIn = new ShopSellIn(item.sellIn);
      const itemRender = new ItemRender(shopName, shopQuality, shopSellIn);
      itemRender.methodeTest();
      item.quality = shopQuality.get();
      item.sellIn = shopSellIn.get();
      return item;
    });

    return this.items;
  }
};
