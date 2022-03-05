import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});
function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello('TypeScript'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
