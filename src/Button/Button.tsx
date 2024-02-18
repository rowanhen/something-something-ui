import { FC } from "react";
import styled, { css } from "styled-components";
import { Loader } from "..";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
}

const sizeStyles = {
  small: css`
    padding: 6px 12px;
    font-size: 0.8rem;
  `,
  medium: css`
    padding: 8px 18px;
    font-size: 1rem;
  `,
  large: css`
    padding: 10px 24px;
    font-size: 1.2rem;
  `,
};

export const Button: FC<ButtonProps> = ({
  active,
  disabled,
  loading,
  size = "small",
  children,
  ...props
}) => {
  return (
    <ButtonStyled
      {...props}
      active={active}
      disabled={disabled}
      loading={loading}
      size={size}
    >
      {loading && (
        <LoaderContainer>
          <Loader size={16} />
        </LoaderContainer>
      )}
      <ChildrenContainer loading={loading}>{children}</ChildrenContainer>
    </ButtonStyled>
  );
};

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChildrenContainer = styled.div<Pick<ButtonProps, "loading">>`
  flex-grow: 1;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`;

const ButtonStyled = styled.button<ButtonProps>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.borderPrimary};

  ${({ size = "medium" }) => sizeStyles[size]}

  ${({ loading }) =>
    loading &&
    css`
      cursor: progress;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
