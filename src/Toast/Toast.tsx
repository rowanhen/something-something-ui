import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { Button } from "..";
import { usePortal } from "../PortalProvider";
import { colors } from "../theme";
import { useToast } from "./ToastProvider"; // Adjust the import path as needed

export interface ToastProps {
  id: string;
  title: string;
  open: boolean;
  closeButton?: boolean;
  handleClose?: () => void;
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
  width?: string;
  autoClose?: number;
  position:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";
}

export const Toast: FC<ToastProps> = ({
  id,
  title,
  open,
  handleClose,
  closeButton,
  primaryButton,
  secondaryButton,
  width,
  autoClose = 6,
  position,
}) => {
  const { portalRoot } = usePortal();
  const { removeToast } = useToast();

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        removeToast(id);
      }, autoClose * 1000);
      return () => clearTimeout(timer);
    }
    return;
  }, [autoClose, handleClose, id, removeToast]);

  if (!portalRoot || !open) return null;

  const toastContent = (
    <StyledToast width={width} position={position} open={open}>
      <Content>
        <Header>
          {title && <Title>{title}</Title>}
          {closeButton && (
            <CloseButton onClick={() => removeToast(id)}>X</CloseButton>
          )}
        </Header>
        <Footer>
          {secondaryButton && (
            <ToastButton onClick={secondaryButton.onClick}>
              {secondaryButton.label}
            </ToastButton>
          )}
          {primaryButton && (
            <ToastButton onClick={primaryButton.onClick}>
              {primaryButton.label}
            </ToastButton>
          )}
        </Footer>
      </Content>
    </StyledToast>
  );

  return createPortal(toastContent, portalRoot);
};

const StyledToast = styled.div<{
  width?: string;
  position: string;
  open: boolean;
}>`
  position: fixed;
  width: ${(props) => props.width || "300px"};
  padding: 12px;
  background-color: ${colors.white_smoke.DEFAULT};
  border: 1px solid ${colors.night.DEFAULT};
  border-radius: 4px;
  z-index: 1000;

  opacity: 0;

  ${(props) =>
    props.position.includes("top") &&
    css`
      top: 48px;
    `}
  ${(props) =>
    props.position.includes("bottom") &&
    css`
      bottom: 48px;
    `}

  ${(props) =>
    props.position.includes("center") &&
    css`
      left: 50%;
      transform: translateX(-50%) translateY(0);
    `}

  ${(props) =>
    props.position.includes("left") &&
    css`
      left: 48px;
    `}
  ${(props) =>
    props.position.includes("right") &&
    css`
      right: 48px;
      transform: translateY(0);
    `}

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
    `}
`;

const Content = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h2``;

const CloseButton = styled(Button)``;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`;

const ToastButton = styled(Button)`
  flex-grow: 1;
`;
