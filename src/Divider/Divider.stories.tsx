import { Story } from "@storybook/react";
import { Divider, DividerProps } from "./Divider";

export default {
  title: "Divider",
  component: Divider,
};

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  type: "horizontal",
  size: 1,
  margin: "10px 0",
};

export const Vertical = () => (
  <>
    <div style={{ display: "flex" }}>
      <div>Left</div>
      <Divider type="vertical" size={1} margin="0 10px" />
      <div>Right</div>
    </div>
  </>
);

export const CustomSize = Template.bind({});
CustomSize.args = {
  type: "horizontal",
  size: 3,
  margin: "20px 0",
};
