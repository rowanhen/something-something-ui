import { Story } from "@storybook/react";
import { Container, ContainerProps } from "./Container"; // Update the import path

export default {
  title: "Container",
  component: Container,
};

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Container Label",
  labelX: "center",
  labelY: "top",
  children: "This is the content of the container.",
};

export const BottomRightLabel = Template.bind({});
BottomRightLabel.args = {
  ...Default.args,
  labelX: "right",
  labelY: "bottom",
};

export const TopLeftLabel = Template.bind({});
TopLeftLabel.args = {
  ...Default.args,
  labelX: "left",
  labelY: "top",
};
