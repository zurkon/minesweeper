import { useState } from 'react';
import { generateCells } from '../../utils/cells';
import Board from '../Board';
import Button from '../Button';
import Header from '../Header';
import { GameContainer } from './style';

const Game = () => {
  const [cells, setCells] = useState(generateCells());

  return (
    <GameContainer>
      <Header />
      <Board cells={cells} />
    </GameContainer>
  );
}

export default Game;