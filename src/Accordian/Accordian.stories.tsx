import { Story } from "@storybook/react";
import { Accordian, AccordianProps } from "./Accordian";

export default {
  title: "Accordian",
  component: Accordian,
};

const Template: Story<AccordianProps> = (args) => <Accordian {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Click Me to Expand",
  children: <div>This is the content of the accordion</div>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Click Me to Expand",
  children: <div>This is the content of the accordion</div>,
};

export const SimpleAccordian = Template.bind({});
SimpleAccordian.args = {
  title: "Click Me to Expand",
  children: <div>This is the content of the accordion</div>,
};

export const MultipleAccordians = () => (
  <>
    <Accordian title="First Accordian">
      <div>This is the first accordion content</div>
    </Accordian>
    <Accordian title="Second Accordian">
      <div>This is the second accordion content</div>
    </Accordian>
    <Accordian title="Third Accordian">
      <div>This is the third accordion content</div>
    </Accordian>
  </>
);

export const CustomStyledAccordian = Template.bind({});
CustomStyledAccordian.args = {
  title: "Custom Style Accordian",
  children: (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      This is a custom styled accordion content.
    </div>
  ),
};
