import React, { FC } from "react";
import styled from "styled-components";
import { Field } from "../Field";

export interface RadioProps {
  label?: string;
  name: string;
  assistiveText?: string;
  value: string;
  displayValue?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  requiredMessage?: string;
  disabled?: boolean;
}

export const Radio: FC<RadioProps> = ({
  label,
  name,
  assistiveText,
  value,
  displayValue,
  checked,
  onChange,
  requiredMessage,
  disabled,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !disabled) {
      onChange(event as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Field
      label={label}
      assistiveText={assistiveText}
      id={name}
      requiredMessage={requiredMessage}
    >
      <RadioContainer>
        <RadioInput
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onKeyDown={handleKeyPress}
          disabled={disabled}
          id={name}
        />
        {displayValue || value}
      </RadioContainer>
    </Field>
  );
};

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;
