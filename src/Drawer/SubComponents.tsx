import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Button } from "../Button"; // Adjust path as necessary

export interface DrawerHeaderProps {
  handleClose: () => void;
  title?: string;
  closeButton?: boolean;
}
export const DrawerHeader: FC<DrawerHeaderProps & PropsWithChildren> = ({
  title,
  closeButton,
  handleClose,
  children,
}) => (
  <Header>
    <HeaderTitle>
      {title && <Title>{title}</Title>}
      {closeButton && <CloseButton onClick={handleClose}>X</CloseButton>}
    </HeaderTitle>
    <Children>{children}</Children>
  </Header>
);

export const DrawerBody: FC<PropsWithChildren> = ({ children }) => (
  <Children>{children}</Children>
);

export const DrawerFooter: FC<PropsWithChildren> = ({ children }) => (
  <Footer>
    <Children>{children}</Children>
  </Footer>
);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-items: flex-start;
`;

const HeaderTitle = styled.div`
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
