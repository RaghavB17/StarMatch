import React, { useState, useEffect } from 'react';

import Game from './index';

// Remounting
const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export function App() {
  return <StarMatch />;
}
