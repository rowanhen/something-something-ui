import { FC } from "react";
import styled, { css } from "styled-components";

import { Asciis, asciiList } from "./asciiList";

export type AsciiProps = {
  ascii: Asciis;
  size?: number;
};

export const Ascii: FC<AsciiProps> = ({ ascii, size = 16 }) => {
  if (!ascii || !asciiList[ascii]) return null;

  const AsciiComponent = asciiList[ascii];

  return <Container size={size}>{AsciiComponent}</Container>;
};

const Container = styled.div<{
  size: number;
}>(
  ({ size, theme }) => css`
    font-size: ${size}px;
    color: ${theme.textPrimary};
  `
);
