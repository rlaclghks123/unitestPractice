function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

function testMock(input, onSuccess, onFail) {
  if (input()) {
    onSuccess('ok');
  } else {
    onFail('no');
  }
}
module.exports = { forEach, testMock };
