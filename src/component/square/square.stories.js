
import square from './square.svelte';

export default {
    Title: 'Square',
    component: square,
    argTypes: {
        size: { control: 'number' }, // control: 'number' は、Storybook UI で数値を調整できるようにする
        color: { control: 'color' }, // control: 'color' は、Storybook UI でカラーピッカーを表示する
    },
};

const Template = (args) => ({
    Component: square,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    width: 120,
    height: 120,
    color: '#dc143c',
};

export const MediumSquare = Template.bind({});
MediumSquare.args = {
    width: 80,
    height: 80,
    color: '#ffd700',
};