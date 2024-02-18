import { FC, ReactNode, forwardRef } from "react";
import styled, { css } from "styled-components";
import { Colors, colors } from "../theme";

export const typoStyles = {
  "heading-large": css`
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
  `,
  "heading-medium": css`
    font-size: 28px;
    font-weight: bold;
    line-height: 36px;
  `,
  "heading-small": css`
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
  `,
  "body-large": css`
    font-size: 18px;
    font-weight: normal;
    line-height: 28px;
  `,
  "body-regular": css`
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
  `,
  "body-small": css`
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
  `,
  label: css`
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    text-transform: uppercase;
  `,
  caption: css`
    font-size: 12px;
    font-weight: normal;
    line-height: 16px;
  `,
  code: css`
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    line-height: 22px;
  `,
};

export type Typo = keyof typeof typoStyles;

export type TypographyProps = {
  tag?: string;
  className?: string;
  typo?: Typo;
  color?: Colors;
  children: ReactNode;
};

export const Typography: FC<TypographyProps> = forwardRef<
  HTMLElement,
  TypographyProps
>(
  (
    {
      children,
      typo = "body-regular",
      className = "",
      tag = "span",
      color = "night",
      ...props
    },
    ref
  ) => (
    <Text
      as={tag}
      className={className}
      typo={typo}
      color={color}
      {...props}
      ref={ref}
    >
      {children}
    </Text>
  )
);

export const Text = styled.span<Required<Omit<TypographyProps, "tag">>>`
  ${(props) => typoStyles[props.typo] || typoStyles["body-regular"]};
  color: ${({ color, theme }) =>
    color ? colors[color].DEFAULT : theme.textPrimary};
`;
