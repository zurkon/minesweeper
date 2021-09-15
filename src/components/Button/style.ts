import styled from "styled-components";
import { border } from "../../utils/mixins";

export const ButtonContainer = styled.div`
  ${border('#fff', '#999')};

  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;