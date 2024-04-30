const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log("Hello World");

console.log("Keep up the good work, and keep on learning. It's goinggitg pay off the end!!")

console.log("Buddy Holiday");

console.log('Keep going if this has been commited');