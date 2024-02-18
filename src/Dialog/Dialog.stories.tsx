import { Story } from "@storybook/react";
import { useState } from "react";
import { Button } from "..";
import { Dialog, DialogProps } from "./Dialog";

export default {
  title: "Dialog",
  component: Dialog,
};

const Template: Story<DialogProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Dialog {...args} open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  title: "Default Dialog",
  closeButton: true,
  children: <p>This is a default modal</p>,
};

export const WithPrimaryButton = Template.bind({});
WithPrimaryButton.args = {
  ...Default.args,
  primaryButton: {
    label: "Primary",
    onClick: () => alert("Primary Button clicked"),
  },
};

export const WithSecondaryButton = Template.bind({});
WithSecondaryButton.args = {
  ...Default.args,
  width: "600px",
  secondaryButton: {
    label: "Secondary",
    onClick: () => alert("Secondary Button clicked"),
  },
};

export const FullFeatured = Template.bind({});
FullFeatured.args = {
  ...WithPrimaryButton.args,
  ...WithSecondaryButton.args,
};
