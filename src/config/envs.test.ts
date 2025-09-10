import { envs } from "./envs";

describe("Testing envs.ts", () => {
  test("should return env options", () => {
    expect(envs).toEqual({
      PORT: 4000,
      WEBSERVICE_URL: "http://localhost:3000/api",
      DB_HOST: "localhost-test",
      DB_DATABASE: "tecnico-test",
      DB_USERNAME: "root-test",
      DB_PASSWORD: "123456-test",
      JWT_SEED: "este-es-el-seed-test",
    });
  });

  test("should return error if not found env", async () => {
    jest.resetModules();
    process.env.PORT = "ABC";

    try {
      await import("./envs");
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});
