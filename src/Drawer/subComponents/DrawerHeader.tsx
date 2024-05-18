import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Button } from "../../Button";

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
