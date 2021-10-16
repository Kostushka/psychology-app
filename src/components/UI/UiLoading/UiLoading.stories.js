import UiLoading from './UiLoading';

export default {
    title: 'Ui-Kit/UiLoading',
    component: UiLoading,
};

const Template = (args) => <UiLoading {...args} />;

const props = {
    theme: 'red',
    isShadow: false,
    classes: '',
};

export const Black = Template.bind({});
Black.args = {
    ...props,
    theme: 'black',
};

export const White = Template.bind({});
White.args = {
    ...props,
    theme: 'white',
    isShadow: true,
};

export const Red = Template.bind({});
Red.args = {
    ...props,
    theme: 'red',
};
