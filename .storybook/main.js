/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook",
    '@storybook/addon-a11y',
  ],

  staticDirs: ["../public"],

  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },

  docs: {}
};
export default config;
