import { MAX_COLUMNS, MAX_ROWS } from "../../constants";
import { Cell, CellState, CellValue } from "../../types";

export const setCellFlagged = (
  cells: Cell[][],
  rowParam: number,
  colParam: number,
  currentBombCounter: number
): [Cell[][], number] => {
  const newCells = cells.slice();
  const currentCell = cells[rowParam][colParam];
  let bombCounter = currentBombCounter;

  if (currentCell.state === CellState.visible) {
    return [newCells, bombCounter];
  } else if (currentCell.state === CellState.open && bombCounter > 0) {
    newCells[rowParam][colParam].state = CellState.flagged;
    bombCounter = bombCounter - 1;
  } else if (currentCell.state === CellState.flagged && bombCounter < 10) {
    newCells[rowParam][colParam].state = CellState.open;
    bombCounter = bombCounter + 1;
  }

  return [newCells, bombCounter];
}

// Check to see if you have won
export const safeOpenCellExists = (cells: Cell[][]): boolean => {
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLUMNS; col++) {
      const currentCell = cells[row][col];

      if (
        currentCell.value !== CellValue.bomb &&
        currentCell.state === CellState.open
      ) {
        return true;
      }
    }
  } // For
  return false;
}