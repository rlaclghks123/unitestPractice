const ProductClient = require("../productClient.js");
const ProductService = require("../productService.js");

jest.mock("../productClient.js");

describe("product service test", () => {
  const fetchItems = jest.fn(async () => [
    { item: "apple", available: true },
    { item: "banana", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  test("test about avaliable items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "apple", available: true }]);
  });
});
