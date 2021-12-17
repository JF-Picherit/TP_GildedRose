module.exports = class ShopName {
  constructor(name) {
    this.name = name;
    this.name1 = "Aged Brie";
    this.name2 = "Backstage passes to a TAFKAL80ETC concert";
    this.name3 = "Sulfuras, Hand of Ragnaros";
    this.nameItems = [this.name1, this.name2, this.name3];
  }

  checkIsName1() {
    return this.name === this.name1;
  }

  checkIsName2() {
    return this.name === this.name2;
  }

  checkIsName3() {
    return this.name === this.name3;
  }

  checkNameIncludes() {
    return this.nameItems.includes(this.name);
  }

  get() {
    return this.name;
  }
};
