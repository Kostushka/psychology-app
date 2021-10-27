import UiVideo from './UiVideo';
import src from './video/video.mp4';

export default {
    title: 'Ui-Kit/UiVideo',
    component: UiVideo,
};

const Template = (args) => <UiVideo {...args} />;

const props = {
    src: src,
    playbackRate: 1.0,
    classes: '',
};

export const Default = Template.bind({});
Default.args = {
    ...props,
};
