import { FC, SelectHTMLAttributes } from "react";
import styled from "styled-components";
import { Field } from "..";

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  assistiveText?: string;
  requiredMessage?: string;
  prefix?: string;
  suffix?: string;
  options: { value: string; label: string }[];
}

export const Dropdown: FC<DropdownProps> = ({
  label,
  assistiveText,
  requiredMessage,
  prefix,
  suffix,
  options,
  ...selectProps
}) => {
  return (
    <Field
      label={label}
      assistiveText={assistiveText}
      requiredMessage={requiredMessage}
      id={selectProps.id}
    >
      <DropdownWrapper>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledSelect {...selectProps}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        {suffix && <Suffix>{suffix}</Suffix>}
      </DropdownWrapper>
    </Field>
  );
};

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Prefix = styled.span`
  margin-right: 8px;
`;

const Suffix = styled.span`
  margin-left: 8px;
`;

const StyledSelect = styled.select`
  flex: 1;
  padding: 8px;
`;
