import { ElementRef, FC, PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { usePortal } from "../PortalProvider";

export interface DrawerProps {
  open: boolean;
  onChange?: () => void;
  handleClose: () => void;
  title?: string;
  closeButton?: boolean;
  width?: string;
  closeOnOutsideClick?: boolean;
}

export const Drawer: FC<DrawerProps & PropsWithChildren> = ({
  open,
  onChange,
  handleClose,
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
    if (onChange) {
      onChange();
    }
  }, [open]);

  if (!portalRoot) return null;

  const drawerContent = (
    <StyledDrawer ref={drawerRef} open={open} width={width}>
      {children}
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
