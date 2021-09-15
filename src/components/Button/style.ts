import styled from "styled-components";
import { CellState, CellValue } from "../../types";
import { border } from "../../utils/mixins";

interface ContainerProps {
  state: CellState;
  value: CellValue | string;
}

export const ButtonContainer = styled.div<ContainerProps>`
  ${border('#fff', '#999')};

  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  ${props => props.state === CellState.visible ?
    'border-color: #7b7b7b; border-width: 1px;' : ''}
  
  ${props => props.value === CellValue.one ?
    'color: blue;' : ''}
  ${props => props.value === CellValue.two ?
    'color: green;' : ''}
  ${props => props.value === CellValue.three ?
    'color: red;' : ''}
  ${props => props.value === CellValue.four ?
    'color: purple;' : ''}

  &:active {
    ${border('#999', '#fff')};
  }

  span{
    font-size: 16px;
  }
`;