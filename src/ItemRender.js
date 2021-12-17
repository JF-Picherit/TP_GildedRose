module.exports = class ItemRender {
  constructor(shopName, shopQuality, shopSellIn) {
    this.shopName = shopName;
    this.shopQuality = shopQuality;
    this.shopSellIn = shopSellIn;
  }

  methode1() {
    if (
      !this.shopName.checkNameIncludes() &&
      this.shopQuality.qualitySuperiorToZero()
    ) {
      this.shopQuality.set(-1);
    } else {
      if (this.shopQuality.qualityInferiorToFifty()) {
        if (
          this.shopName.checkIsName2() &&
          this.shopSellIn.sellInInferiorToEleven()
        ) {
          this.shopQuality.set(+1);
        }
        if (this.shopSellIn.sellInInferiorToSix()) {
          this.shopQuality.set(+1);
        }
        this.shopQuality.set(+1);
      }
    }
  }

  methode2() {
    if (!this.shopName.checkIsName3()) {
      this.shopSellIn.set(-1);
    }
  }

  methode3() {
    if (this.shopSellIn.sellInInferiorToZero()) {
      if (!this.shopName.checkIsName1()) {
        if (!this.shopName.checkIsName2()) {
          if (
            this.shopQuality.qualitySuperiorToZero() &&
            !this.shopName.checkIsName3()
          ) {
            this.shopQuality.set(-1);
          }
        } else {
          item.quality = zero;
        }
      } else {
        if (this.shopQuality.qualityInferiorToFifty()) {
          this.shopQuality.set(+1);
        }
      }
    }
  }
};
