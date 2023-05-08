const fetchFn = require('../async.js');

describe('Resolve Test', () => {
  it('Async Done Test', (done) => {
    fetchFn(200).then((res) => {
      expect(res).toEqual({ message: 'Success' });
      done();
    });
  });

  it('Async return Test', () => {
    return fetchFn(200).then((res) => {
      expect(res).toEqual({ message: 'Success' });
    });
  });

  it('Async Await Test', async () => {
    let res = await fetchFn(200);
    expect(res).toEqual({ message: 'Success' });
  });

  it('Async Resolve Test', () => {
    return expect(fetchFn(200)).resolves.toEqual({ message: 'Success' });
  });
});

describe('Reject Test', () => {
  it('Async - then - catch Reject Test', () => {
    fetchFn(400)
      .then()
      .catch((error) => {
        expect(error).toBe('network error');
      });
  });

  it('Async - rejects,  Reject Test', () => {
    return expect(fetchFn(400)).rejects.toBe('network error');
  });
});
