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

    const zero = 0;
    const un = 1;
    const six = 6;
    const onze = 11;
    const cinquante = 50;


    for (let i = 0; i < this.items.length; i++) {
      const myItem = this.items[i];

      if (!nameItems.includes(myItem.name)) {
        if (myItem.quality > zero) {
          myItem.quality = myItem.quality - un;
        }
      } else {
        if (myItem.quality < cinquante) {
          myItem.quality = myItem.quality + un;
          if ((myItem.name == name2) && (myItem.sellIn < onze) && (myItem.quality < cinquante)) {
                myItem.quality = myItem.quality + un;
            }
            if ((myItem.sellIn < six) && (myItem.quality < cinquante)) {
                myItem.quality = myItem.quality + un;
            }
        }
      }

      if (myItem.name != name3) {
        myItem.sellIn = myItem.sellIn - un;
      }

      if (myItem.sellIn < zero) {
        if (myItem.name != name1) {
          if (myItem.name != name2) {
            if ((myItem.quality > zero) && (myItem.name != name3)) {
                myItem.quality = myItem.quality - un;
            }
          } else {
            myItem.quality = myItem.quality - myItem.quality;
          }
        } else {
          if (myItem.quality < cinquante) {
            myItem.quality = myItem.quality + un;
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
