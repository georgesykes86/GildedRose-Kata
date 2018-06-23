class QualityStrategy {
  constructor() {
    this.strategies = {
      Default: this.defaultStrategy,
      'Aged Brie': this.agedBrieStrategy,
      'Conjured Item': this.conjuredStrategy,
      'Backstage passes to a TAFKAL80ETC concert': this.ticketStrategy,
      'Sulfuras, Hand of Ragnaros': this.sulfurasStrategy,
    };
    this.QUALITY_INCREMENT = 1;
  }

  defaultStrategy(item) {
    this._incrementQuality(item);
    this._pastSellInCheck(item);
  }

  agedBrieStrategy() { }

  ticketStrategy() { }

  sulfurasStrategy() { }

  _pastSellInCheck(item) {
    if (item.sellIn <= 0) { this._incrementQuality(item); }
  }

  _incrementQuality(item) { item.quality -= this.QUALITY_INCREMENT; }
}

module.exports.QualityStrategy = QualityStrategy;
