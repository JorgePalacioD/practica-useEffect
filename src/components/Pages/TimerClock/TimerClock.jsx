import React, { useEffect, useState } from 'react';

export const TimerClock = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const getTwoDigits = (num) => String(num).padStart(2, '0');
    const hrs = getTwoDigits(Math.floor(seconds / 3600));
    const mins = getTwoDigits(Math.floor((seconds % 3600) / 60));
    const secs = getTwoDigits(seconds % 60);
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Temporizador</h2>
      <p className="text-2xl font-mono bg-gray-200 p-4 rounded-lg mb-4">
        {formatTime(time)}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          Iniciar
        </button>
        <button
          onClick={handlePause}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Pausar
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Resetear
        </button>
      </div>
    </div>
  );
};
