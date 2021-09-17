import React, { useEffect, useState } from 'react';
import { Cell, CellState, CellValue, FaceState } from '../../types';
import { generateCells, openMultipleCells, showAllBombs } from '../../utils/cells';
import Board from '../Board';
import Header from '../Header';
import { safeOpenCellExists, setCellFlagged } from './functions';
import { GameContainer } from './style';

const Game = () => {
  const [cells, setCells] = useState<Cell[][]>(generateCells());
  const [face, setFace] = useState<FaceState>(FaceState.smile);
  const [time, setTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [bombCounter, setBombCounter] = useState<number>(10);

  // Time Counter loop
  useEffect(() => {
    if (playing && time < 999) {
      const timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      }
    }
  }, [playing, time]);

  const handleCellClick = (
    rowParam: number,
    colParam: number
  ) => (): void => {
    // start the game
    if (!playing) {
      setPlaying(true);
    }

    const currentCell = cells[rowParam][colParam];
    let newCells = cells.slice();

    if (currentCell.state === CellState.flagged || currentCell.state === CellState.visible) {
      return;
    }

    if (currentCell.value === CellValue.bomb) {
      setFace(FaceState.lost);
      setPlaying(false);
      newCells = showAllBombs(newCells);
      setCells(newCells);
      return;

    } else if (currentCell.value === CellValue.none) {
      newCells = openMultipleCells(newCells, rowParam, colParam);
    } else {
      newCells[rowParam][colParam].state = CellState.visible;
    }

    if (!safeOpenCellExists(newCells)) {
      newCells = newCells.map(row => row.map(cell => {
        if (cell.value === CellValue.bomb) {
          return {
            ...cell,
            state: CellState.flagged
          }
        }
        return cell;
      }));
      setBombCounter(0);
      setPlaying(false);
      setFace(FaceState.won);
    }

    setCells(newCells);
  }

  const handleCellRightClick = (
    rowParam: number,
    colParam: number
  ) => (e: React.MouseEvent): void => {
    e.preventDefault();

    if (!playing) {
      return;
    }

    const [newCells, newBombCounter] = setCellFlagged(cells, rowParam, colParam, bombCounter);

    setCells(newCells);
    setBombCounter(newBombCounter);
  }

  // Reset Button
  const handleFaceClick = (): void => {
    setPlaying(false);
    setTime(0);
    setCells(generateCells());
    setBombCounter(10);
    setFace(FaceState.smile);
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