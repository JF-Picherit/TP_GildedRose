module.exports = class Product {
  constructor(item) {
    this.maximumQuality = 50;
    this.minimumQuality = 0;
    this.item = item;
  }

  setQuality(value) {
    if (value < this.maximumQuality && value > this.minimumQuality) {
      this.item.quality = value;
    } else if (value >= this.maximumQuality) {
      this.item.quality = this.maximumQuality;
    } else if (value <= this.minimumQuality) {
      this.item.quality = this.minimumQuality;
    }
  }

  updateItem() {
    this.setQuality(this.item.quality - (this.item.sellIn < 1 ? 2 : 1));
    this.item.sellIn -= 1;
  }

};
