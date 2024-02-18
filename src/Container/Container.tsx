import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  label?: string;
  labelX?: "center" | "left" | "right";
  labelY?: "top" | "bottom";
}

export const Container: FC<ContainerProps> = ({
  className,
  children,
  label,
  labelX = "center",
  labelY = "top",
}) => {
  return (
    <Wrapper>
      <Border className={className}>
        {label && (
          <Label labelX={labelX} labelY={labelY}>
            {label}
          </Label>
        )}
        {children}
      </Border>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  padding: 12px;
`;

const Border = styled.div`
  padding: 20px;
  border: ${(props) => props.theme.borderPrimary};
  position: relative;
`;

const Label = styled.h4<Pick<ContainerProps, "labelX" | "labelY">>`
  ${({ labelX, labelY }) => css`
    position: absolute;
    background-color: ${(props) => props.theme.background};
    padding: 0 12px;

    ${labelY === "top" &&
    css`
      top: -24px;
      transform: translateY(-50%);
    `}

    ${labelY === "bottom" &&
    css`
      bottom: -24px;
      transform: translateY(50%);
    `}

    ${labelX === "center" &&
    css`
      left: 50%;
      transform: translateX(-50%)
        ${labelY === "top" ? "translateY(-50%)" : "translateY(50%)"};
    `}

    ${labelX === "left" &&
    css`
      left: 24px;
    `}

    ${labelX === "right" &&
    css`
      right: 24px;
    `}
  `}
`;
