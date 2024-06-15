// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import { CounterResult } from './CounterResult';


const meta: Meta<typeof CounterResult> = {
    component:CounterResult,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'light',
        },
        layout:"fullscreen"

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

type Story = StoryObj<typeof CounterResult>;

export const StandartDisplay: Story = {
    // 👇 Story-level parameters

    args:{

        count:1,
        error:"",
        message:"Welcome",
        nameButtonInc:"ADD",
        nameButtonReset:"RESET",
        settings:true,
        disabledReset :true,
        disabledInc:false,
        onClickInc:action("increment"),
            onClickReset:action("push reset"),
    max:6


    }};
