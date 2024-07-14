import { WebSocketServer } from 'ws';
import { userManager } from './src/UserManager';
import url from 'url';

const wss = new WebSocketServer({ port: 8080 });
let cnt = 0;

wss.on('connection', function connection(ws, req) {
    const users = userManager.getUsers();
    const parsedUrl = url.parse(req.url!, true).query.name;
    let name = "Guest " + cnt++;

    if (typeof parsedUrl === 'string') {
        name = parsedUrl;
    }
    userManager.addUser(name, ws);

    ws.send(JSON.stringify({ type: 'connection', message: 'welcome' }));
    ws.send(JSON.stringify({ type: 'users', message: Array.from(users.keys()) }));

    ws.on('close', () => {
        // userManager.removeUser(name);
        console.log(`${name} disconnected`);
    });

    ws.on('error', console.error);

    ws.on('message', function message(message) {
        const data = JSON.parse(message.toString());
        if (data.type === 'ping') {
            console.log(`Ping received from ${name}`);
            if (data.target) {
                const targetWs = userManager.getUsers().get(data.target);
                if (targetWs) {
                    targetWs.send(JSON.stringify({ type: 'ping', message: `Ping from ${name}` }));
                    console.log(`Ping sent to ${data.target}`);
                    if(targetWs.readyState===targetWs.OPEN){

                        ws.send(JSON.stringify({ type: 'pong', message: 'Pong from ' + data.target }));
                        console.log(`Pong sent to ${data.target}`);
                        
                    }
                    // ws.send(JSON.stringify({ type: 'pong', message: 'Pong from ' + data.target }));
                }
            } else {
                userManager.getUsers().forEach((userWs, userName) => {
                    userWs.send(JSON.stringify({ type: 'ping', message: `Ping from ${name}` }));
                    if(userWs.OPEN===userWs.readyState){

                        ws.send(JSON.stringify({ type: 'pong', message: 'Pong from ' + userName }));
                        console.log(`Pong sent to ${userName}`);
                        
                    }
                    // console.log(`Ping sent to ${userName}`);
                });
            }
        }
    });
});

console.log('WebSocket server started on ws://localhost:8080');
