import { Story } from "@storybook/react";
import { Toggle, ToggleProps } from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
};

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Toggle",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: "Unchecked Toggle",
  checked: false,
  onToggle: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked Toggle",
  checked: true,
  onToggle: () => {},
};

export const WithAssistiveText = Template.bind({});
WithAssistiveText.args = {
  label: "Toggle with Assistive Text",
  assistiveText: "Switch ON to activate",
  checked: false,
  onToggle: () => {},
};

export const WithRequiredMessaget = Template.bind({});
WithRequiredMessaget.args = {
  label: "Toggle with Assistive Text",
  assistiveText: "Switch ON to activate",
  requiredMessage: "Required message",
  checked: false,
  onToggle: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Toggle",
  disabled: true,
};
