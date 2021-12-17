module.exports = class ItemRender {
  constructor(shopName, shopQuality, shopSellIn) {
    this.shopName = shopName;
    this.shopQuality = shopQuality;
    this.shopSellIn = shopSellIn;
  }

  methodeTest() {
    if (!this.shopName.checkNameIncludes()) {
      if (this.shopQuality.qualitySuperiorToZero()) {
        this.shopQuality.set(-1);
        if (this.shopSellIn.sellInInferiorToZero()) {
          this.shopQuality.set(-1);
        }
      }
    } else {
      if (this.shopName.checkIsName2())
        if (
          this.shopSellIn.sellInInferiorToEleven() &&
          this.shopQuality.qualityInferiorToFifty()
        ) {
          this.shopQuality.set(1);
        } else if (this.shopSellIn.sellInInferiorToZero()) {
          this.shopQuality.set(1);
        }
    }

    if (!this.shopName.checkIsName3()) {
      this.shopSellIn.set(-1);
    }

    if (this.shopQuality.qualityInferiorToFifty()) {
      if (this.shopSellIn.sellInInferiorToSix()) {
        this.shopQuality.set(1);
      }
    } else {
      if (
        this.shopSellIn.sellInInferiorToZero() &&
        this.shopName.checkIsName1()
      ) {
        this.shopQuality.set(1);
      }
    }
  }
};
