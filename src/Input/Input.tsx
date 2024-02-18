import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Field } from "..";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  assistiveText?: string;
  requiredMessage?: string;
  prefix?: string;
  suffix?: string;
}

export const Input: FC<InputProps> = ({
  label,
  assistiveText,
  requiredMessage,
  prefix,
  suffix,
  ...inputProps
}) => {
  return (
    <Field
      label={label}
      assistiveText={assistiveText}
      requiredMessage={requiredMessage}
      id={inputProps.id}
    >
      <InputWrapper>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput
          {...inputProps}
          aria-describedby={`${inputProps.id}-assistive ${inputProps.id}-required`}
        />
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputWrapper>
    </Field>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Prefix = styled.span`
  margin-right: 8px;
`;

const Suffix = styled.span`
  margin-left: 8px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 8px;
`;
