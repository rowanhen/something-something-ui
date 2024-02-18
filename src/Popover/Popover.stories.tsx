import { Story } from "@storybook/react";
import styled from "styled-components";
import { Popover, PopoverProps } from "./Popover";

export default {
  title: "Popover",
  component: Popover,
};

const Template: Story<PopoverProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <div>Hover over the text to see the popover.</div>
    <Popover {...args}>Hover Me</Popover>
  </div>
);

export const Title = Template.bind({});
Title.args = {
  title: "Title",
  popoverContent:
    "Popover content Popover content Popover content Popover content Popover content",
  defaultPosition: "top",
};

const ReactNodeContent = styled.div`
  margin: 80px;
`;
export const Top = Template.bind({});
Top.args = {
  popoverContent: <ReactNodeContent>Popover on Top</ReactNodeContent>,
  defaultPosition: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  popoverContent: "Popover on Bottom",
  defaultPosition: "bottom",
};

export const Left = Template.bind({});
Left.args = {
  popoverContent: "Popover on Left",
  defaultPosition: "left",
};

export const Right = Template.bind({});
Right.args = {
  popoverContent: "Popover on Right",
  defaultPosition: "right",
};
