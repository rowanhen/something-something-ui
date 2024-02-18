import { FC, ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../theme";

export interface FieldProps {
  label?: string;
  children?: ReactNode;
  assistiveText?: string;
  requiredMessage?: string;
  id?: string;
  className?: string;
}

export const Field: FC<FieldProps> = ({
  label,
  children,
  assistiveText,
  requiredMessage,
  id,
  className,
}) => {
  return (
    <FieldContainer className={className}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      {children}
      {assistiveText && (
        <AssistiveText id={`${id}-assistive`}>{assistiveText}</AssistiveText>
      )}
      {requiredMessage && (
        <RequiredMessage id={`${id}-required`}>
          {requiredMessage}
        </RequiredMessage>
      )}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  margin-bottom: 20px;
`;

const FieldLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const AssistiveText = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  color: ${colors.night[600]};
`;

const RequiredMessage = styled.span`
  display: block;
  color: ${colors.red_pantone.DEFAULT};
  font-size: 16px;
`;
