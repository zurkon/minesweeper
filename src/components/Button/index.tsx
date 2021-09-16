import React, { FC } from "react";
import { CellState, CellValue } from "../../types";
import { ButtonContainer } from "./style";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
  onClick(
    rowParam: number,
    colParam: number
  ): (e: React.MouseEvent) => void;
  onContext(
    rowParam: number,
    colParam: number
  ): (e: React.MouseEvent) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

const Button: FC<ButtonProps> = ({
  row,
  col,
  onClick,
  onContext,
  state,
  value,
  onMouseDown,
  onMouseUp
}) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.visible) {
      if (value === CellValue.bomb) {
        return (
          <span role="img" aria-label="bomb" >
            💣
          </span>)
      }

      return value !== 0 ? value : "";
    } else if (state === CellState.flagged) {
      return (
        <span role="img" aria-label="flag" >
          🚩
        </span>)
    }
  }

  return (
    <ButtonContainer
      state={state}
      value={value}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row, col)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {renderContent()}
    </ButtonContainer>
  );
}

export default Button;