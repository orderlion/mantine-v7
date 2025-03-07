/// <reference types="react" />
import { GetStylesApi } from '../../core';
import type { ColorPickerFactory } from './ColorPicker';
interface ColorPickerContextValue {
    getStyles: GetStylesApi<ColorPickerFactory>;
}
export declare const ColorPickerProvider: ({ children, value }: {
    value: ColorPickerContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useColorPickerContext: () => ColorPickerContextValue;
export {};
