import { Story } from "@storybook/react";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "Radio",
  component: Radio,
};

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Unselected = Template.bind({});
Unselected.args = {
  label: "Unselected Radio",
  name: "radio",
  value: "option1",
  checked: false,
  onChange: () => {},
};

export const Selected = Template.bind({});
Selected.args = {
  label: "Selected Radio",
  name: "radio",
  value: "option2",
  checked: true,
  onChange: () => {},
};

export const WithAssistiveText = Template.bind({});
WithAssistiveText.args = {
  label: "Radio with Assistive Text",
  name: "radio",
  value: "option3",
  assistiveText: "Additional info",
  checked: false,
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Radio",
  name: "radio",
  value: "option4",
  disabled: true,
  checked: false,
  onChange: () => {},
};
