const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');

jest.mock('../user_client.js');

describe('userService Mock test', () => {
  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  test('login Test', async () => {
    await userService.login('asd', 'asd');
    expect(login).toHaveBeenCalledTimes(1);
  });

  test('login aleady Test', async () => {
    await userService.login('asd', 'asd');
    await userService.login('qwe', 'qwe');
    expect(login).toHaveBeenCalledTimes(1);
  });
});
