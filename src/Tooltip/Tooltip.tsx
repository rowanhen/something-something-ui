import { FC, HTMLAttributes, ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../theme";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  defaultPosition?: "top" | "left" | "right" | "bottom";
  title?: string;
  tooltipContent: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  defaultPosition = "top",
  tooltipContent,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <Tip position={defaultPosition}>
          {title && <Title>{title}</Title>}
          {tooltipContent}
        </Tip>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
  border-bottom: 1px dashed ${colors.ut_orange[600]};
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
`;

const Tip = styled.div<{ position: string }>`
  position: absolute;
  padding: 8px;
  background-color: ${colors.white_smoke.DEFAULT};
  border: 1px solid ${colors.night.DEFAULT};
  z-index: 1000;

  ${({ position }) => {
    switch (position) {
      case "top":
        return css`
          margin-bottom: 8px;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return css`
          margin-top: 8px;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          offset-anchor: top center;
        `;
      case "left":
        return css`
          margin-right: 8px;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          offset-anchor: center right;
        `;
      case "right":
        return css`
          margin-left: 8px;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          offset-anchor: center left;
        `;
      default:
        return "";
    }
  }};
`;
