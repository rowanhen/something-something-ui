import { FC } from "react";
import styled, { css } from "styled-components";
import { colors } from "../theme";

export interface DividerProps {
  type: "horizontal" | "vertical";
  size?: number;
  margin?: string;
}

export const Divider: FC<DividerProps> = ({ type, size, margin }) => {
  return <DividerStyled type={type} size={size} margin={margin} />;
};

const DividerStyled = styled.div<DividerProps>`
  ${({ type, size = 1, margin = "0" }) => css`
    ${type === "horizontal" && "width"}: 100%;
    ${type === "horizontal" ? "height" : "width"}: ${size}px;
    margin: ${margin};
    background: ${colors.night.DEFAULT};
  `}
`;
