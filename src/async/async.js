function fetchFn(response) {
  if (response === 400) {
    return Promise.reject('network error');
  }

  if (response === 200) {
    return Promise.resolve({ message: 'Success' });
  }
}

module.exports = fetchFn;
