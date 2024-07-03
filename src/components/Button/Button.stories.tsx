import type { Meta, StoryObj } from '@storybook/react';
import Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ReactComponentLibrarys/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Hello',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click Me',
  },
};
