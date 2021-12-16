class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    nameItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'];

    for (let i = 0; i < this.items.length; i++) {
      const myItem = this.items[i];

      if (!myItem.name.includes(nameItems)) {
        if (myItem.quality > 0) {
          myItem.quality = myItem.quality - 1;
        }
      } else {
        if (myItem.quality < 50) {
          myItem.quality = myItem.quality + 1;
          if (myItem.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (myItem.sellIn < 11) {
              if (myItem.quality < 50) {
                myItem.quality = myItem.quality + 1;
              }
            }
            if (myItem.sellIn < 6) {
              if (myItem.quality < 50) {
                myItem.quality = myItem.quality + 1;
              }
            }
          }
        }
      }
      if (myItem.name != 'Sulfuras, Hand of Ragnaros') {
        myItem.sellIn = myItem.sellIn - 1;
      }
      if (myItem.sellIn < 0) {
        if (myItem.name != 'Aged Brie') {
          if (myItem.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (myItem.quality > 0) {
              if (myItem.name != 'Sulfuras, Hand of Ragnaros') {
                myItem.quality = myItem.quality - 1;
              }
            }
          } else {
            myItem.quality = myItem.quality - myItem.quality;
          }
        } else {
          if (myItem.quality < 50) {
            myItem.quality = myItem.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
