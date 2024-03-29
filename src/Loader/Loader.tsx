import { FC } from "react";
import styled from "styled-components";
import { Colors, colors } from "../theme";

export interface LoaderProps {
  color?: Colors;
  size?: number;
}

export const Loader: FC<LoaderProps> = ({ color, size = 16 }) => {
  return <Container color={color} size={size} />;
};

const Container = styled.div<{ size: number; color?: Colors }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: inline-block;
  box-sizing: border-box;

  --c: no-repeat
    linear-gradient(
      ${({ color, theme }) =>
          color ? colors[color].DEFAULT : theme.invertedBackground}
        0 0
    );
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: l1 1s infinite linear;
  @keyframes l1 {
    0% {
      background-size: 20% 100%, 20% 100%, 20% 100%;
    }
    33% {
      background-size: 20% 10%, 20% 100%, 20% 100%;
    }
    50% {
      background-size: 20% 100%, 20% 10%, 20% 100%;
    }
    66% {
      background-size: 20% 100%, 20% 100%, 20% 10%;
    }
    100% {
      background-size: 20% 100%, 20% 100%, 20% 100%;
    }
  }
`;
