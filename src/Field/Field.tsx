import { FC, ReactNode } from "react";
import styled from "styled-components";

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
  color: ${(props) => props.theme.textPrimary};
`;

const FieldLabel = styled.label`
  display: block;
  font-weight: bold;
  color: ${(props) => props.theme.textPrimary};
`;

const AssistiveText = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.textSecondary};
`;

const RequiredMessage = styled.span`
  display: block;
  color: ${(props) => props.theme.error};
  font-size: 16px;
`;
