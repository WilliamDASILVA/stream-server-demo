const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server);

io.on('connection', (client) => {
  console.log('User joigned');

  client.on('test1', () => {
    console.log('test 1 received');
  });

  client.on('test2', () => {
    console.log('test 2 received');
  });

  client.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000);
