import '../src/index.css';
/** @type { import('@storybook/svelte').Preview } */
const preview = {
  actions: { argTypesRegex: "^on.*" },

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
