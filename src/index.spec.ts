import promiseFinally from "./index";

describe("promise-finally", () => {
  it("should run on resolve", async () => {
    const cb = jest.fn();

    await expect(promiseFinally(Promise.resolve("hello"), cb)).resolves.toEqual(
      "hello"
    );

    expect(cb).toBeCalledWith();
  });

  it("should run on reject", async () => {
    const cb = jest.fn();

    await expect(promiseFinally(Promise.reject("hello"), cb)).rejects.toEqual(
      "hello"
    );

    expect(cb).toBeCalledWith();
  });
});
