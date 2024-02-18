import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Field } from "../Field"; // Importing the Field component

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  disabled?: boolean;
  assistiveText?: string;
  requiredMessage?: string;
  onToggle: () => void;
}

export const Toggle: FC<ToggleProps> = ({
  label,
  disabled,
  assistiveText,
  requiredMessage,
  checked,
  onToggle,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !disabled) {
      onToggle();
    }
  };

  return (
    <Container>
      <ToggleSwitch>
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          onKeyDown={handleKeyPress}
          disabled={disabled}
        />
        <span />
      </ToggleSwitch>
      <StyledField
        label={label}
        assistiveText={assistiveText}
        requiredMessage={requiredMessage}
        id={label}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme.textPrimary};
`;

const StyledField = styled(Field)`
  margin-top: 4px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
  margin-right: 8px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.surface};
    transition: 0.4s;
    border-radius: 28px;

    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: ${(props) => props.theme.background};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${(props) => props.theme.primaryVariant};
  }

  input:focus + span {
    box-shadow: 0 0 1px 1px ${(props) => props.theme.secondaryVariant};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;
