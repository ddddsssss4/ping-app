'use client' 

import React, { useEffect, useState } from 'react';

const WebSocketComponent = ({ name }: { name: string }) => {
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [log, setLog] = useState<string[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [targetUser, setTargetUser] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const webSocket = new WebSocket(`wss://ping-app-3bb7.onrender.com?name=${name}`);

    webSocket.onopen = () => {
      setConnectionStatus('Connected');
      addLog('Connected to server');
    };

    webSocket.onclose = () => {
      setConnectionStatus('Disconnected');
      addLog('Disconnected from server');
    };

    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data.toString());
      if (data.type === 'ping') {
        addLog(`Ping received: ${data.message}`);
        webSocket.send(JSON.stringify({ type: 'pong', message: 'Pong from ' + name }));
        addLog('Pong sent');
      } else if (data.type === 'connection') {
        addLog(data.message);
      } else if (data.type === 'pong') {
        addLog(`Pong received: ${data.message}`);
      } else if (data.type === 'users') {
        setUsers(data.message);
        addLog(`Users: ${data.message.join(', ')}`);
      }
    };

    const addLog = (message: string) => {
      setLog((prevLog) => [...prevLog, message]);
    };

    setWs(webSocket);

    return () => {
      webSocket.close();
    };
  }, [name]);

  const sendPing = (target: string) => {
    if (ws) {
      ws.send(JSON.stringify({ type: 'ping', target }));
      setLog((prev) => [...prev, `Ping sent to ${target || 'all users'}`]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">WebSocket Client</h1>
      <div className="bg-card p-8 rounded-lg shadow-lg w-96">
        <p className="mb-4">Status: {connectionStatus}</p>
        <div className="flex items-center space-x-4 mb-4">
          <label htmlFor="userSelect">Send Ping to:</label>
          <select
            id="userSelect"
            value={targetUser}
            onChange={(e) => setTargetUser(e.target.value)}
            disabled={connectionStatus !== 'Connected'}
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
          >
            <option value="">All Users</option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button
            onClick={() => sendPing(targetUser)}
            disabled={connectionStatus !== 'Connected'}
            className={`bg-primary text-white px-4 py-2 rounded ${connectionStatus !== 'Connected' && 'opacity-50 cursor-not-allowed'}`}
          >
            Send Ping
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-2">Logs</h2>
          <ul className="overflow-auto max-h-60">
            {log.map((entry, index) => (
              <li key={index} className="mb-1">{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebSocketComponent;
