import { FC } from "react";
import styled, { css } from "styled-components";

import { Colors, colors } from "../theme";
import { Icons, iconList } from "./iconList";

export type IconProps = {
  icon: Icons;
  size?: number;
  color?: Colors;
  rotate?: number;
  className?: string;
};

export const Icon: FC<IconProps> = ({
  className = "",
  icon,
  size = 24,
  color,
  rotate = 0,
}) => {
  if (!icon || !iconList[icon]) return null;

  const IconComponent = iconList[icon];

  return (
    <Container
      as="span"
      className={className}
      size={size}
      rotate={rotate}
      color={color}
    >
      <IconComponent />
    </Container>
  );
};

interface IIcon {
  size: number;
  color: Colors;
  rotate: number;
}

const Container = styled.div<IIcon>(
  ({ size, rotate, color, ...props }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${size}px;
    height: ${size}px;
    transform: rotate(${rotate}deg);
    svg {
      color: ${color ? colors[color].DEFAULT : props.theme.surface} !important;
    }
  `
);
