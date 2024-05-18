import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export const DrawerFooter: FC<PropsWithChildren> = ({ children }) => (
  <Footer>
    <Children>{children}</Children>
  </Footer>
);

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  gap: 12px;
`;
const Children = styled.div``;
