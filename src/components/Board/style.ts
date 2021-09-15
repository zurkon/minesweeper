import styled from "styled-components";
import { border } from "../../utils/mixins";

export const BoardContainer = styled.div`
  margin-top: 16px;
  ${border('#999', '#fff')};

  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
`;