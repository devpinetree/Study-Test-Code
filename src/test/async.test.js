const fetchProductExample = require('../async');

describe('Async', () => {
  it('async return', () => {
    return fetchProductExample().then((product) =>
      expect(product).toEqual({ item: 'Milk', price: 200 })
    );
  });

  it('async await', async () => {
    const product = await fetchProductExample();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async resolves', () => {
    return expect(fetchProductExample()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  it('async reject', () => {
    return expect(fetchProductExample('error')).rejects.toBe('network error');
  });
});
