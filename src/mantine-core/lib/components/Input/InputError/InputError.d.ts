import { BoxProps, StylesApiProps, ElementProps, MantineSize, Factory } from '../../../core';
export type InputErrorStylesNames = 'error';
export type InputErrorCssVariables = {
    error: '--input-error-size';
};
export interface InputErrorProps extends BoxProps, StylesApiProps<InputErrorFactory>, ElementProps<'div'> {
    __staticSelector?: string;
    /** Controls error `font-size`, `'sm'` by default */
    size?: MantineSize | (string & {});
}
export type InputErrorFactory = Factory<{
    props: InputErrorProps;
    ref: HTMLParagraphElement;
    stylesNames: InputErrorStylesNames;
    vars: InputErrorCssVariables;
}>;
export declare const InputError: import("../../../core").MantineComponent<{
    props: InputErrorProps;
    ref: HTMLParagraphElement;
    stylesNames: InputErrorStylesNames;
    vars: InputErrorCssVariables;
}>;
