// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import {fn} from "@storybook/test";

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const StandartButton: Story = {
    // 👇 Story-level parameters

    args:{
        name:"Button",
        onClick:fn(),
        disabled:false


}};
