import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button"; // Adjust the import path as necessary

export default {
  title: "Button",
  component: Button,
};

const Template: Story = (props: ButtonProps) => (
  <Button {...props}>Button</Button>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
  onClick: () => alert("Small Button clicked"),
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  onClick: () => alert("Medium Button clicked"),
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  onClick: () => alert("Large Button clicked"),
};

export const Loading = Template.bind({});
Loading.args = {
  size: "medium",
  loading: true,
  onClick: () => alert("Loading Button clicked"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: "medium",
  disabled: true,
  onClick: () => alert("Disabled Button clicked"),
};
