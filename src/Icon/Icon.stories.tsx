import { Story } from "@storybook/react";
import styled from "styled-components";
import { Icon, IconProps } from "./Icon";
import { Icons, iconList } from "./iconList";

export default {
  title: "Icon",
  component: Icon,
};

const Template: Story<IconProps> = (props) => <Icon {...props} />;

export const Default = Template.bind({});

Default.args = {
  icon: "barcode",
  size: 32,
  color: "night",
  rotate: 0,
};

const Container = () => {
  return (
    <div>
      {Object.keys(iconList).map((icon) => {
        return (
          <Wrapper key={icon}>
            <span>{icon}</span>
            <Icon icon={icon as Icons} color="brandeis_blue" />
          </Wrapper>
        );
      })}
    </div>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const CollectionTemplate = () => <Container />;

export const Collection = CollectionTemplate.bind({});
