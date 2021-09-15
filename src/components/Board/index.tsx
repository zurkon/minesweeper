import { FC } from "react";
import { Cell } from "../../types";
import Button from "../Button";
import { BoardContainer } from "./style";

const Board: FC<{ cells: Cell[][] }> = ({ cells }) => {
  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) => <Button key={`${rowIndex}-${colIndex}`} />)
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