// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import { SettingCounter } from './SettingCounter';
import {ChangeEvent} from "react";


const meta: Meta<typeof SettingCounter> = {
    component:SettingCounter,
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

type Story = StoryObj<typeof SettingCounter>;

export const StandartDisplay: Story = {
    // 👇 Story-level parameters

    args:{

        count:1,
        error:"",
        max:6,
        start:1,
        onChangeMax:action("max value changed"),
        onChangeStart:action("start value changed"),
        onClickSet:action("set"),
        nameButton:"SET",
        disabled:false,



    }};
