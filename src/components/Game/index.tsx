import React, { useEffect, useState } from 'react';
import { Cell, CellState, CellValue, FaceState } from '../../types';
import { generateCells, openMultipleCells } from '../../utils/cells';
import Board from '../Board';
import Header from '../Header';
import { GameContainer } from './style';

const Game = () => {
  const [cells, setCells] = useState<Cell[][]>(generateCells());
  const [face, setFace] = useState<FaceState>(FaceState.smile);
  const [time, setTime] = useState<number>(0);
  const [live, setLive] = useState<boolean>(false);
  const [bombCounter, setBombCounter] = useState<number>(10);

  useEffect(() => {
    if (live && time < 999) {
      const timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      }
    }
  }, [live, time]);

  const handleCellClick = (
    rowParam: number,
    colParam: number
  ) => (): void => {
    // start the game
    if (!live) {
      setLive(true);
    }

    const currentCell = cells[rowParam][colParam];
    let newCells = cells.slice();

    if (
      currentCell.state === CellState.flagged ||
      currentCell.state === CellState.visible
    ) {
      return;
    }

    if (currentCell.value === CellValue.bomb) {
      // TODO: take care of bomb click
    } else if (currentCell.value === CellValue.none) {
      newCells = openMultipleCells(newCells, rowParam, colParam);
      setCells(newCells);
    } else {
      newCells[rowParam][colParam].state = CellState.visible;
      setCells(newCells);
    }
  }

  const handleCellRightClick = (
    rowParam: number,
    colParam: number
  ) => (e: React.MouseEvent): void => {
    e.preventDefault();

    if (!live) {
      return;
    }

    const currentBoard = cells.slice();
    const currentCell = cells[rowParam][colParam];

    if (currentCell.state === CellState.visible) {
      return;
    } else if (currentCell.state === CellState.open && bombCounter > 0) {
      currentBoard[rowParam][colParam].state = CellState.flagged;
      setCells(currentBoard);
      setBombCounter(bombCounter - 1);

    } else if (currentCell.state === CellState.flagged && bombCounter < 10) {
      currentBoard[rowParam][colParam].state = CellState.open;
      setCells(currentBoard);
      setBombCounter(bombCounter + 1);
    }
  }

  const handleFaceClick = (): void => {
    if (live) {
      setLive(false);
      setTime(0);
      setCells(generateCells());
      setBombCounter(10);
    }
  }

  return (
    <GameContainer>
      <Header
        face={face}
        time={time}
        handleFaceClick={handleFaceClick}
        bombCounter={bombCounter}
      />
      <Board
        cells={cells}
        handleClick={handleCellClick}
        handleRightClick={handleCellRightClick}
        handleMouseDown={() => { setFace(FaceState.oh); }}
        handleMouseUp={() => { setFace(FaceState.smile); }}
      />
    </GameContainer>
  );
}

export default Game;