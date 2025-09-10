import { envs } from "./config/envs";
import { Server } from "./presentation/server";

jest.mock("./presentation/server");

describe("Testing App.ts", () => {
  test("Should work", async () => {
    await import("./app");

    expect(Server).toHaveBeenCalledTimes(1);
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      routes: expect.any(Function),
    });

    expect(Server.prototype.start).toHaveBeenCalled();
  });
});
