import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => (
  <Button onClick={() => console.log('teste')} {...args}>
    Test text
  </Button>
);

export const Default = Template.bind({});

Default.args = {
  variant: 'secondary',
  size: 'small',
  isFullWidth: false,
  disabled: false,
};
