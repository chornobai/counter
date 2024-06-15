// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import { Input } from './Input';
import {fn} from "@storybook/test";
import {ChangeEvent} from "react";

const meta: Meta<typeof Input> = {
    component:Input,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'light',
        },

    },
    argTypes: {
        value: {
            description: 'Start value empty. Add value push button set string.'
        },
        onChangeInput: {
            description: 'Value  changed'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const StandartInput: Story = {
    // 👇 Story-level parameters

    args:{
        value:1,
        onChangeInput:action('Value input changed'),
        idInput:"input",
        nameLabel:"Input",
        error:""


    }};
