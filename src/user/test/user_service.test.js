const UserService = require("../user_service.js");
const UserClient = require("../user_client.js");

jest.mock("../user_client.js");

describe("userService test", () => {
  const login = jest.fn(async () => "success");

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  test("user tried to login", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });

  test("shold not call login() if user already logined", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
    expect(login.mock.calls.length).toBe(1);
  });
});
