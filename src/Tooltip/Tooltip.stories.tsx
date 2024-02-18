import { Story } from "@storybook/react";
import styled from "styled-components";
import { Tooltip, TooltipProps } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: Story<TooltipProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <div>Hover over the text to see the tooltip.</div>
    <Tooltip {...args}>Hover Me</Tooltip>
  </div>
);

export const Title = Template.bind({});
Title.args = {
  title: "Title",
  tooltipContent:
    "Tooltip content Tooltip content Tooltip content Tooltip content Tooltip content",
  defaultPosition: "top",
};

const ReactNodeContent = styled.div`
  margin: 80px;
`;
export const Top = Template.bind({});
Top.args = {
  tooltipContent: <ReactNodeContent>Tooltip on Top</ReactNodeContent>,
  defaultPosition: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  tooltipContent: "Tooltip on Bottom",
  defaultPosition: "bottom",
};

export const Left = Template.bind({});
Left.args = {
  tooltipContent: "Tooltip on Left",
  defaultPosition: "left",
};

export const Right = Template.bind({});
Right.args = {
  tooltipContent: "Tooltip on Right",
  defaultPosition: "right",
};
