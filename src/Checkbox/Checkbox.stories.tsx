import { Story } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Checkbox",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked Checkbox",
  checked: true,
};

export const WithAssistiveText = Template.bind({});
WithAssistiveText.args = {
  label: "Checkbox with Assistive Text",
  assistiveText: "Additional information here",
};

export const WithRequiredMessage = Template.bind({});
WithRequiredMessage.args = {
  label: "Checkbox with Required Message",
  assistiveText: "Additional information here",
  requiredMessage: "Required message here",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Checkbox",
  disabled: true,
};
