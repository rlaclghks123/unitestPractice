class ProductClient {
  fetchItems() {
    return fetch("https://product.com/login/id+password").then((response) => response.json());
  }
}

module.exports = ProductClient;
