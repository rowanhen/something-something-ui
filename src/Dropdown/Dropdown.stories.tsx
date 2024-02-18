import { Story } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Dropdown",
  options,
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  label: "Dropdown with Prefix",
  prefix: "#",
  options,
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  label: "Dropdown with Suffix",
  suffix: "v",
  options,
};

export const RequiredWithAssistiveText = Template.bind({});
RequiredWithAssistiveText.args = {
  label: "Required Dropdown",
  assistiveText: "Please select an option",
  requiredMessage: "This field is required",
  required: true,
  options,
};
