import { forwardRef } from "react";
import styled from "styled-components";
import { Field } from "../Field"; // Importing the previously created Field component
import { colors } from "../theme";

export interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  assistiveText?: string;
  requiredMessage?: string;
  toggle: () => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckBox(
    { label, assistiveText, requiredMessage, checked, toggle, id, disabled },
    ref
  ) {
    return (
      <Container>
        <StyledCheckbox
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={toggle}
          disabled={disabled}
        />
        <StyledField
          label={label}
          assistiveText={assistiveText}
          requiredMessage={requiredMessage}
          id={id}
        />
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
`;

const StyledField = styled(Field)`
  margin-top: 3px;
`;

const StyledCheckbox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background: ${({ checked }) =>
    checked ? colors.brandeis_blue.DEFAULT : colors.white_smoke.DEFAULT};
  border: 1px solid
    ${({ checked }) =>
      checked ? colors.brandeis_blue.DEFAULT : colors.white_smoke[400]};
  border-radius: 6px;
  transition: all 150ms;
  margin-right: 8px;
`;
