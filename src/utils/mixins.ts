import { css } from "styled-components";

export const border = (leftTop: string, rightBottom: string) => css`
  border-width: 4px;
  border-style: solid;
  border-right-color: ${rightBottom};
  border-bottom-color: ${rightBottom};
  border-left-color: ${leftTop};
  border-top-color: ${leftTop};
`;