import React, { FC } from "react";
import { Cell } from "../../types";
import Button from "../Button";
import { BoardContainer } from "./style";

interface BoardProps {
  cells: Cell[][];
  handleClick(
    rowParam: number,
    colParam: number
  ): (e: React.MouseEvent) => void;
  handleRightClick(
    rowParam: number,
    colParam: number
  ): (e: React.MouseEvent) => void;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
}

const Board: FC<BoardProps> = ({
  cells,
  handleClick,
  handleRightClick,
  handleMouseDown,
  handleMouseUp
}) => {
  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        <Button
          key={`${rowIndex}-${colIndex}`}
          row={rowIndex}
          col={colIndex}
          onClick={handleClick}
          state={cell.state}
          value={cell.value}
          onContext={handleRightClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />)
    );
  };

  return (
    <BoardContainer>
      {
        renderCells()
      }
    </BoardContainer>
  );
}

export default Board;