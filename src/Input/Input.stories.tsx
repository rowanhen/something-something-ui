import { Story } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Input",
  type: "text",
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  label: "Input with Prefix",
  prefix: "$",
  type: "text",
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  label: "Input with Suffix",
  suffix: "kg",
  type: "text",
};

export const RequiredWithAssistiveText = Template.bind({});
RequiredWithAssistiveText.args = {
  label: "Required Input",
  assistiveText: "Please enter a value",
  requiredMessage: "This field is required",
  required: true,
  type: "text",
};
