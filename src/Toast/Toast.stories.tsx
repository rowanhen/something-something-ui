import { Story } from "@storybook/react";
import { PortalProvider } from "../PortalProvider";
import { Toast, ToastProps } from "./Toast"; // Ensure correct import path
import { ToastProvider, useToast } from "./ToastProvider"; // Ensure correct import path

export default {
  title: "Toast",
  component: Toast,
};

const Template: Story<ToastProps> = (args) => {
  return (
    <PortalProvider>
      <ToastProvider>
        <CreateToast {...args} />
      </ToastProvider>
    </PortalProvider>
  );
};

const CreateToast = (args: ToastProps) => {
  const { addToast } = useToast();
  return (
    <button onClick={() => addToast(<Toast {...args} />, args.id)}>
      Open toast
    </button>
  );
};

export const DefaultToast = Template.bind({});
DefaultToast.args = {
  id: "default-toast",
  title: "Default Toast",
  open: true,
  position: "bottom-right",
  autoClose: 3,
};

export const ToastWithButtons = Template.bind({});
ToastWithButtons.args = {
  ...DefaultToast.args,
  primaryButton: {
    label: "Primary",
    onClick: () => alert("Primary Clicked"),
  },
  secondaryButton: {
    label: "Secondary",
    onClick: () => alert("Secondary Clicked"),
  },
};

export const TopLeftToast = Template.bind({});
TopLeftToast.args = {
  ...DefaultToast.args,
  position: "top-left",
};
