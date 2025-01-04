/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.stories.js',
    '../src/**/*.stories.svelte',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  staticDirs: ["../public"],

  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },

  docs: {}
};
export default config;
