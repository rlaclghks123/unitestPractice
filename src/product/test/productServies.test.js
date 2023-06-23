const ProductClient = require('../productClient.js');
const ProductService = require('../productService.js');

// 1. 모듈 전체를 모킹해준다.
jest.mock('../productClient.js');

describe('product service test', () => {
  // 모듈안의 함수를 모킹해준다.
  const fetchItems = jest.fn(async () => {
    return [
      { item: 'phone', stock: 1 },
      { item: 'computer', stock: 2 },
      { item: 'IPad', stock: 3 },
      { item: 'HeadSet', stock: 4 },
    ];
  });

  // 두개를 연결해준다. 함수에서 this.productClient.fetchItems()를 사용하기 때문
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;
  beforeEach(() => {
    productService = new ProductService();
  });

  test('', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([
      { item: 'computer', stock: 2 },
      { item: 'HeadSet', stock: 4 },
    ]);
  });
});
