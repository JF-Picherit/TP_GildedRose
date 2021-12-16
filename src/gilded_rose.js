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
    const name1 = 'Aged Brie';
    const name2 = 'Backstage passes to a TAFKAL80ETC concert';
    const name3 = 'Sulfuras, Hand of Ragnaros';
    const nameItems = [name1, name2, name3];

    for (let i = 0; i < this.items.length; i++) {
      const myItem = this.items[i];



      if (!nameItems.includes(myItem.name)) {
        if (myItem.quality > 0) {
          myItem.quality = myItem.quality - 1;
        }
      } else {
        if (myItem.quality < 50) {
          myItem.quality = myItem.quality + 1;
          if (myItem.name == name2) {
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
      if (myItem.name != name3) {
        myItem.sellIn = myItem.sellIn - 1;
      }
      if (myItem.sellIn < 0) {
        if (myItem.name != name1) {
          if (myItem.name != name2) {
            if (myItem.quality > 0) {
              if (myItem.name != name3) {
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
