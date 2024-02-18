import { FC, ReactNode, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Button } from "../Button";

export interface DialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  closeButton: boolean;
  children: ReactNode;
  width?: string;
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
}

export const Dialog: FC<DialogProps> = ({
  open,
  handleClose,
  title,
  closeButton,
  children,
  width,
  primaryButton,
  secondaryButton,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        if (typeof dialogRef.current.showModal === "function") {
          dialogRef.current.showModal();
        } else {
          console.warn(
            "The showModal() method is not supported by this browser."
          );
        }
      } else {
        dialogRef.current.close();
      }
    }
  }, [open]);

  return (
    <StyledDialog ref={dialogRef} width={width}>
      <Header>
        <h2>{title}</h2>
        {closeButton && <CloseButton onClick={handleClose}>X</CloseButton>}
      </Header>
      <Content>{children}</Content>
      <Footer>
        {secondaryButton && (
          <SecondaryButton
            onClick={secondaryButton.onClick}
            fullLength={!!primaryButton}
          >
            {secondaryButton.label}
          </SecondaryButton>
        )}
        {primaryButton && (
          <PrimaryButton
            onClick={primaryButton.onClick}
            fullLength={!!secondaryButton}
          >
            {primaryButton.label}
          </PrimaryButton>
        )}
      </Footer>
    </StyledDialog>
  );
};

const StyledDialog = styled.dialog<{ width?: string }>(
  ({ width }) => css`
    min-width: 300px;

    ${width &&
    css`
      width: ${width};
    `}

    &[open] {
      animation: fade-in 0.1s ease-out;
    }

    &[open]::backdrop {
      animation: backdrop-fade-in 0.1s ease-out forwards;
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: scaleY(0);
      }
      100% {
        opacity: 1;
        transform: scaleY(1);
      }
    }

    @keyframes backdrop-fade-in {
      0% {
        background-color: rgb(0 0 0 / 0);
      }
      100% {
        background-color: rgb(0 0 0 / 0.3);
      }
    }
  `
);

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const CloseButton = styled(Button)``;

const Content = styled.div``;

const Footer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 60%;
`;

const PrimaryButton = styled(Button)<{ fullLength: boolean }>(
  ({ fullLength }) => css`
    ${fullLength &&
    css`
      width: 100%;
    `}
    min-width: 120px;
  `
);

const SecondaryButton = styled(Button)<{ fullLength: boolean }>(
  ({ fullLength }) => css`
    ${fullLength &&
    css`
      width: 100%;
    `}
    min-width: 120px;
  `
);
