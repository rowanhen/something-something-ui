import {
  ElementRef,
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { colors } from "../theme";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  popoverContent: ReactNode;
  defaultPosition?: "top" | "left" | "right" | "bottom";
}

export const Popover: FC<PopoverProps> = ({
  children,
  popoverContent,
  defaultPosition = "bottom",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<ElementRef<"div">>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopoverContainer ref={popoverRef}>
      <Trigger onClick={() => setIsVisible(!isVisible)}>{children}</Trigger>
      {isVisible && (
        <PopoverContent position={defaultPosition} {...props}>
          {popoverContent}
        </PopoverContent>
      )}
    </PopoverContainer>
  );
};

const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const Trigger = styled.div``;

const PopoverContent = styled.div<{ position: string }>`
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
