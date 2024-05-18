import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export const DrawerBody: FC<PropsWithChildren> = ({ children }) => (
  <Body>
    <Children>{children}</Children>
  </Body>
);

const Body = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Children = styled.div``;
