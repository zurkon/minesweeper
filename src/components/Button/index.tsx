import React, { FC } from "react";
import { CellState, CellValue } from "../../types";
import { ButtonContainer } from "./style";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
}

const Button: FC<ButtonProps> = ({ row, col, state, value }) => {
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
    <ButtonContainer state={state} value={value}>
      {renderContent()}
    </ButtonContainer>
  );
}

export default Button;