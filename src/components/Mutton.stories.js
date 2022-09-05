import Mutton from './Mutton.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Mutton',
  component: Mutton,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'ugly'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Mutton,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Mutton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Mutton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Mutton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Mutton',
};

export const Ugly = Template.bind({});
Ugly.args = {
  size: 'ugly',
  label: 'Shmutton',
};
