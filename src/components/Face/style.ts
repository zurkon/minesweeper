import styled from "styled-components";
import { border } from "../../utils/mixins";

export const FaceContainer = styled.div`
  ${border('#fff', '#999')};

  font-size: 32px;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    ${border('#999', '#fff')};
  }
`;