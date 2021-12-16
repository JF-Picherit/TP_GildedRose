Item = require("./Item");
ShopName = require("./ShopName");
ShopQuality = require("./ShopQuality");
ShopSellIn = require("./ShopSellIn");

module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const zero = 0;

    this.items.map((item) => {
      const shopName = new ShopName(item.name);
      const shopQuality = new ShopQuality(item.quality);
      const shopSellIn = new ShopSellIn(item.sellIn);

      if (
        !shopName.checkNameIncludes() &&
        shopQuality.qualitySuperiorToZero()
      ) {
        item.quality -= 1;
      } else {
        if (shopQuality.qualityInferiorToFifty()) {
          if (shopName.checkIsName2() && shopSellIn.sellInInferiorToEleven()) {
            item.quality += 1;
          }
          if (shopSellIn.sellInInferiorToSix()) {
            item.quality += 1;
          }
          item.quality += 1;
        }
      }

      if (!shopName.checkIsName3()) {
        item.sellIn = item.sellIn -= 1;
      }

      if (shopSellIn.sellInInferiorToZero()) {
        if (!shopName.checkIsName1()) {
          if (!shopName.checkIsName2()) {
            if (
              shopQuality.qualitySuperiorToZero() &&
              !shopName.checkIsName3()
            ) {
              item.quality -= 1;
            }
          } else {
            item.quality = zero;
          }
        } else {
          if (shopQuality.qualityInferiorToFifty()) {
            item.quality += 1;
          }
        }
      }
      return item;
    });

    return this.items;
  }
};
