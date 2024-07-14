import express from 'express'
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

let clients = {};

wss.on('connection', (ws) => {
  const id = Math.random().toString(36).substr(2, 9);
  clients[id] = ws;
  console.log(clients);
  console.log(`Client ${id} connected`);
  broadcastClientList();

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    if (data.type === 'ping') {
      if (data.target === 'all') {
        broadcast(data.message, id);
      } else if (clients[data.target]) {
        clients[data.target].send(JSON.stringify({ from: id, message: data.message }));
      }
    }
  });

  ws.on('close', () => {
    delete clients[id];
    console.log(`Client ${id} disconnected`);
    broadcastClientList();
  });
});

function broadcast(message, from) {
  Object.keys(clients).forEach((id) => {
    if (id !== from) {
      clients[id].send(JSON.stringify({ from, message }));
    }
  });
}

function broadcastClientList() {
  const clientList = Object.keys(clients).map((id) => ({ id }));
  const message = JSON.stringify({ type: 'clientList', clients: clientList });
  Object.values(clients).forEach((client) => {
    client.send(message);
  });
}

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})