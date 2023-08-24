import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineColor, MantineSpacing, MantineSize, MantineRadius } from '../../core';
import { StepperStep } from './StepperStep/StepperStep';
import { StepperCompleted } from './StepperCompleted/StepperCompleted';
export type StepFragmentComponent = React.FC<{
    step: number;
}>;
export type StepperStylesNames = 'root' | 'separator' | 'steps' | 'content' | 'step' | 'stepLoader' | 'verticalSeparator' | 'stepWrapper' | 'stepIcon' | 'stepCompletedIcon' | 'stepBody' | 'stepLabel' | 'stepDescription';
export type StepperCssVariables = {
    root: '--stepper-color' | '--stepper-icon-size' | '--stepper-content-padding' | '--stepper-radius' | '--stepper-fz' | '--stepper-spacing';
};
export interface StepperProps extends BoxProps, StylesApiProps<StepperFactory>, ElementProps<'div'> {
    /** <Stepper.Step /> components */
    children: React.ReactNode;
    /** Called when step is clicked */
    onStepClick?(stepIndex: number): void;
    /** Index of the active step */
    active: number;
    /** Step icon, default value is step index + 1 */
    icon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is completed, check icon by default */
    completedIcon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is in progress, default value is step index + 1 */
    progressIcon?: React.ReactNode | StepFragmentComponent;
    /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of the step icon, by default icon size is inferred from `size` prop */
    iconSize?: number | string;
    /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content */
    contentPadding?: MantineSpacing | (string & {}) | number;
    /** Stepper orientation, `'horizontal'` by default */
    orientation?: 'vertical' | 'horizontal';
    /** Icon position relative to the step body, `'left'` by default */
    iconPosition?: 'right' | 'left';
    /** Controls size of various Stepper elements */
    size?: MantineSize;
    /** Key of `theme.radius` or any valid CSS value to set steps border-radius, `"xl"` by default */
    radius?: MantineRadius | (string & {}) | number;
    /** Determines whether next steps can be selected, `true` by default **/
    allowNextStepsSelect?: boolean;
    /** Determines whether steps should wrap to the next line if no space is available, `true` by default */
    wrap?: boolean;
}
export type StepperFactory = Factory<{
    props: StepperProps;
    ref: HTMLDivElement;
    stylesNames: StepperStylesNames;
    vars: StepperCssVariables;
    staticComponents: {
        Step: typeof StepperStep;
        Completed: typeof StepperCompleted;
    };
}>;
export declare const Stepper: import("../../core").MantineComponent<{
    props: StepperProps;
    ref: HTMLDivElement;
    stylesNames: StepperStylesNames;
    vars: StepperCssVariables;
    staticComponents: {
        Step: typeof StepperStep;
        Completed: typeof StepperCompleted;
    };
}>;
