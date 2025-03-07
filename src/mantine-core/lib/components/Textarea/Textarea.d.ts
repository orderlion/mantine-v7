import { ElementProps, Factory } from '../../core';
import { InputBaseProps } from '../InputBase';
import { __InputStylesNames } from '../Input';
export interface TextareaProps extends InputBaseProps, ElementProps<'textarea', 'size'> {
    /** Determines whether the textarea height should grow with its content, `false` by default */
    autosize?: boolean;
    /** Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set */
    maxRows?: number;
    /** Minimum rows of autosize textarea, ignored if `autosize` prop is not set */
    minRows?: number;
}
export type TextareaFactory = Factory<{
    props: TextareaProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;
export declare const Textarea: import("../../core").MantineComponent<{
    props: TextareaProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;
