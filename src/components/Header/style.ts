import styled from "styled-components";
import { border } from "../../utils/mixins";

export const HeaderContainer = styled.div`
  background: #c0c0c0;
  padding: 10px 12px;
  ${border('#7b7b7b', '#fff')};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;