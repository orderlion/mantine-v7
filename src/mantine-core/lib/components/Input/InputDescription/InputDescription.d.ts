import { BoxProps, StylesApiProps, ElementProps, MantineSize, Factory } from '../../../core';
export type InputDescriptionStylesNames = 'description';
export type InputDescriptionCssVariables = {
    description: '--input-description-size';
};
export interface InputDescriptionProps extends BoxProps, StylesApiProps<InputDescriptionFactory>, ElementProps<'div'> {
    __staticSelector?: string;
    /** Controls description `font-size`, `'sm'` by default */
    size?: MantineSize | (string & {});
}
export type InputDescriptionFactory = Factory<{
    props: InputDescriptionProps;
    ref: HTMLParagraphElement;
    stylesNames: InputDescriptionStylesNames;
    vars: InputDescriptionCssVariables;
}>;
export declare const InputDescription: import("../../../core").MantineComponent<{
    props: InputDescriptionProps;
    ref: HTMLParagraphElement;
    stylesNames: InputDescriptionStylesNames;
    vars: InputDescriptionCssVariables;
}>;
