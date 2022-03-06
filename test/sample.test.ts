describe('test', () => {
  async function delay(n: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1200);
    });
  }
  test.concurrent('test', async () => {
    console.log(1);
    await delay(2);
    console.log('after');
    expect(1 + 1).toBe(2);
  });

  test.concurrent('test2', () => {
    console.log(2);
    expect(1 + 1).toBe(2);
  });

  test.concurrent('test', () => {
    console.log(3);
    expect(1 + 1).toBe(2);
  });
});
