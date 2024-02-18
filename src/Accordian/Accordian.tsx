import { FunctionComponent, ReactNode, useState } from "react";
import styled from "styled-components";

export interface AccordianProps {
  title: string;
  children: ReactNode;
}

export const Accordian: FunctionComponent<AccordianProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordian = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Container>
      <AccordianTitle onClick={toggleAccordian} onKeyDown={handleKeyPress}>
        {title}
      </AccordianTitle>
      {isOpen && <AccordianContent>{children}</AccordianContent>}
    </Container>
  );
};

const Container = styled.section`
  margin: 10px 0;
  color: ${(props) => props.theme.textPrimary};
`;

const AccordianTitle = styled.button`
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.4s ease;
  background: ${(props) => props.theme.background};
  border: ${(props) => props.theme.borderPrimary};
  color: ${(props) => props.theme.textPrimary};
`;

const AccordianContent = styled.div`
  overflow: hidden;
  padding: 4px;
  background: ${(props) => props.theme.background};
`;
