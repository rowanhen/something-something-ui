import { ElementRef, FC, PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button } from "../Button";
import { usePortal } from "../PortalProvider";

export interface DrawerProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  closeButton?: boolean;
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
  width?: string;
  closeOnOutsideClick?: boolean;
}

export const Drawer: FC<DrawerProps & PropsWithChildren> = ({
  open,
  handleClose,
  title,
  closeButton,
  primaryButton,
  secondaryButton,
  width,
  closeOnOutsideClick = true,
  children,
}) => {
  const { portalRoot } = usePortal();
  const drawerRef = useRef<ElementRef<"div">>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node) &&
      closeOnOutsideClick
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Implement any effect you need when the drawer opens/closes
  }, [open]);

  if (!portalRoot) return null;

  const drawerContent = (
    <StyledDrawer ref={drawerRef} open={open} width={width}>
      <Content>
        <Header>
          {title && <Title>{title}</Title>}
          {closeButton && <CloseButton onClick={handleClose}>X</CloseButton>}
        </Header>
        <Children>{children}</Children>
        <Footer>
          {secondaryButton && (
            <DrawerButton onClick={secondaryButton.onClick}>
              {secondaryButton.label}
            </DrawerButton>
          )}
          {primaryButton && (
            <DrawerButton onClick={primaryButton.onClick}>
              {primaryButton.label}
            </DrawerButton>
          )}
        </Footer>
      </Content>
    </StyledDrawer>
  );

  return createPortal(drawerContent, portalRoot);
};

const StyledDrawer = styled.div<{ open: boolean; width?: string }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : `-${props.width || "340px"}`)};
  width: ${(props) => props.width || "300px"};
  height: 100%;
  background-color: ${(props) => props.theme.background};
  border-left: ${(props) => props.theme.borderPrimary};
  transition: right 0.3s ease;
  z-index: 1000;
  color: ${(props) => props.theme.textPrimary};
`;

const Content = styled.div`
  height: 100%;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Children = styled.div``;

const Title = styled.h2``;

const CloseButton = styled(Button)``;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`;

const DrawerButton = styled(Button)`
  flex-grow: 1;
`;
