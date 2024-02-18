import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "storybook-dark-mode"],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {},
  docs: {
    autodocs: true,
  },
};

export default config;
