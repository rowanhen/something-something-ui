import { Story } from "@storybook/react";
import { Loader, LoaderProps } from "./Loader"; // Adjust the import path as necessary

export default {
  title: "Loader",
  component: Loader,
};

const Template: Story = (args: LoaderProps) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 32,
};

export const Orange = Template.bind({});
Orange.args = {
  color: "red_pantone",
  size: 32,
};
