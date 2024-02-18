import { Story } from "@storybook/react";
import { useState } from "react";
import { Button } from "..";
import { PortalProvider } from "../PortalProvider";
import { Drawer, DrawerProps } from "./Drawer"; // Adjust the import path as necessary

export default {
  title: "Drawer",
  component: Drawer,
};

const Template: Story<DrawerProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <PortalProvider>
      <div>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={open} handleClose={() => setOpen(false)} />
      </div>
    </PortalProvider>
  );
};

export const ClosedDrawer = Template.bind({});
ClosedDrawer.args = {
  open: false,
  handleClose: () => alert("Closing drawer"),
  title: "Closed Drawer",
  closeButton: true,
};

export const OpenDrawer = Template.bind({});
OpenDrawer.args = {
  ...ClosedDrawer.args,
  open: true,
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  ...OpenDrawer.args,
  primaryButton: {
    label: "Primary Action",
    onClick: () => alert("Primary Action"),
  },
  secondaryButton: {
    label: "Secondary Action",
    onClick: () => alert("Secondary Action"),
  },
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...OpenDrawer.args,
  width: "400px",
};
