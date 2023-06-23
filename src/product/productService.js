const ProductClient = require('./productClient');

class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.stock % 2 === 0));
  }
}

module.exports = ProductService;
