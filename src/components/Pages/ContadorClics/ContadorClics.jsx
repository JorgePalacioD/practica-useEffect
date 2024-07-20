import React, { useEffect, useState } from 'react';

export const ContadorClics = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(`El botón ha sido clicado ${clicks} veces`);
  }, [clicks]);

  const handleButtonClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-xl font-semibold mb-4">Numero de clics: {clicks}</p>
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Haz clic
      </button>
    </div>
  );
};

