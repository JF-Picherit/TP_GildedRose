module.exports = class ShopQuality {
  constructor(quality) {
    this.quality = quality;
    this.zero = 0;
    this.cinquante = 50;
  }

  qualityInferiorToFifty() {
    return this.quality < this.cinquante;
  }

  qualitySuperiorToZero() {
    return this.quality > this.zero;
  }
};
