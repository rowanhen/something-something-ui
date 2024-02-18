import { FunctionComponent, ReactNode, useState } from "react";
import styled from "styled-components";
import { colors } from "../theme";

export interface AccordianProps {
  title: string;
  children: ReactNode;
}

const AccordianSection = styled.section`
  margin: 10px 0;
`;

const AccordianTitle = styled.button`
  padding: 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.4s ease;
  background: ${colors.white_smoke.DEFAULT};
  border: 1px solid ${colors.night.DEFAULT};
`;

const AccordianContent = styled.div`
  overflow: hidden;
  padding: 4px;
`;

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
    <AccordianSection>
      <AccordianTitle onClick={toggleAccordian} onKeyDown={handleKeyPress}>
        {title}
      </AccordianTitle>
      {isOpen && <AccordianContent>{children}</AccordianContent>}
    </AccordianSection>
  );
};
