import React, { useEffect, useState } from 'react';

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  { id: 3, username: 'user3', password: 'password3' }
];

export const UserActive = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Bienvenido Usuario anónimo');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = users.find(user => user.username === username && user.password === password);
    setIsAuthenticated(!!user);
  }, [username, password]);

  useEffect(() => {
    if (isAuthenticated) {
      const user = users.find(user => user.username === username);
      setMessage(`Bienvenido ${user.username}`);
    } else {
      setMessage('Bienvenido Usuario anónimo');
    }
  }, [isAuthenticated, username]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">{message}</h2>
      <div className="flex space-x-4">
        <div>
          <label className="block text-lg font-medium mb-2">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

