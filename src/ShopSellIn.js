module.exports = class ShopSellIn {
  constructor(sellIn) {
    this.sellIn = sellIn;
    this.zero = 0;
    this.eleven = 11;
    this.six = 6;
  }

  sellInInferiorToZero() {
    return this.sellIn < this.zero;
  }

  sellInInferiorToEleven() {
    return this.sellIn < this.eleven;
  }

  sellInInferiorToSix() {
    return this.sellIn < this.six;
  }
};
