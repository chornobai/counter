// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import { Display } from './Display';


const meta: Meta<typeof Display> = {
    component:Display,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'light',
        },
        layout: "fullscreen"

    },
    // argTypes: {
    //     value: {
    //         description: 'Start value empty. Add value push button set string.'
    //     },
    //     onChangeInput: {
    //         description: 'Value  changed'
    //     }
    // }
};
export default meta;

type Story = StoryObj<typeof Display>;

export const StandartDisplay: Story = {
    // 👇 Story-level parameters

    args:{

        count:2,
        settings:true,
        message:"Welcome",
        max:4,
        error:""


    }};
