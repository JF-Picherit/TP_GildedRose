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

    this.items.map((item) => {

      if ((!nameItems.includes(item.name)) && (item.quality > zero)) {
        item.quality = item.quality - un;
      } else {
        if (item.quality < cinquante) {
          if ((item.name == name2) && (item.sellIn < onze) && (item.quality < cinquante)) {
            item.quality += un;
          }
          if ((item.sellIn < six) && (item.quality < cinquante)) {
            item.quality += un;
          }
          item.quality += un;
        }
      }

      if (item.name != name3) {
        item.sellIn = item.sellIn - un;
      }

      if (item.sellIn < zero) {
        if (item.name != name1) {
          if (item.name != name2) {
            if ((item.quality > zero) && (item.name != name3)) {
                item.quality -= un;
            }
          } else {
            item.quality = zero;
          }
        } else {
          if (item.quality < cinquante) {
            item.quality += un;
          }
        }
      }
      return item;
    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
