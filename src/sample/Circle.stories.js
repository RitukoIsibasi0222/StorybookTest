import Circle from './Circle.svelte';

export default {
  title: 'Circle-Component/Circle',
  component: Circle,
  argTypes: {
    radius: { control: 'number' },
    color: { control: 'color' },
  },
};

const Template = (args) => ({
  Component: Circle,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  radius: 50,
  color: 'blue',
};

export const LargeRedCircle = Template.bind({});
LargeRedCircle.args = {
  radius: 100,
  color: 'red',
};