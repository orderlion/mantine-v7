import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, Factory, MantineSpacing, StyleProp } from '@mantine/core';
import { EmblaPluginType, EmblaCarouselType } from 'embla-carousel-react';
import { CarouselSlide } from './CarouselSlide/CarouselSlide';
export type CarouselStylesNames = 'slide' | 'root' | 'viewport' | 'container' | 'controls' | 'control' | 'indicators' | 'indicator';
export type CarouselCssVariables = {
    root: '--carousel-height' | '--carousel-control-size' | '--carousel-controls-offset';
};
export interface CarouselProps extends BoxProps, StylesApiProps<CarouselFactory>, ElementProps<'div'> {
    /** <Carousel.Slide /> components */
    children?: React.ReactNode;
    /** Called when next slide is shown */
    onNextSlide?(): void;
    /** Called when previous slider is shown */
    onPreviousSlide?(): void;
    /** Called with slide index when slide changes */
    onSlideChange?(index: number): void;
    /** Get embla API as ref */
    getEmblaApi?(embla: EmblaCarouselType): void;
    /** Props passed down to next control */
    nextControlProps?: React.ComponentPropsWithoutRef<'button'>;
    /** Props passed down to previous control */
    previousControlProps?: React.ComponentPropsWithoutRef<'button'>;
    /** Controls size of the next and previous controls, `26` by default */
    controlSize?: React.CSSProperties['width'];
    /** Controls position of the next and previous controls, key of `theme.spacing` or any valid CSS value, `'sm'` by default */
    controlsOffset?: MantineSpacing | (string & {}) | number;
    /** Controls slide width based on viewport width, `'100%'` by default */
    slideSize?: StyleProp<string | number>;
    /** Key of theme.spacing or number to set gap between slides */
    slideGap?: StyleProp<MantineSpacing | (string & {}) | number>;
    /** Carousel orientation, `'horizontal'` by default */
    orientation?: 'horizontal' | 'vertical';
    /** Slides container `height`, required for vertical orientation */
    height?: React.CSSProperties['height'];
    /** Determines how slides will be aligned relative to the container. Use number between 0-1 to align slides based on percentage, where 0.5 is 50%, `'center'` by default */
    align?: 'start' | 'center' | 'end' | number;
    /** Number of slides that will be scrolled with next/previous buttons, `1` by default */
    slidesToScroll?: number | 'auto';
    /** Determines whether gap between slides should be treated as part of the slide size, `true` by default */
    includeGapInSize?: boolean;
    /** Determines whether the carousel can be scrolled with mouse and touch interactions, `true` by default */
    draggable?: boolean;
    /** Determines whether momentum scrolling should be enabled, `false` by default */
    dragFree?: boolean;
    /** Enables infinite looping. `true` by default, automatically falls back to `false` if slide content isn't enough to loop. */
    loop?: boolean;
    /** Adjusts scroll speed when triggered by any of the methods. Higher numbers enables faster scrolling. */
    speed?: number;
    /** Index of initial slide */
    initialSlide?: number;
    /** Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view. For example, 0.5 equals 50%. */
    inViewThreshold?: number;
    /** Determines whether next/previous controls should be displayed, true by default */
    withControls?: boolean;
    /** Determines whether indicators should be displayed, `false` by default */
    withIndicators?: boolean;
    /** An array of embla plugins */
    plugins?: EmblaPluginType[];
    /** Icon of the next control */
    nextControlIcon?: React.ReactNode;
    /** Icon of the previous control */
    previousControlIcon?: React.ReactNode;
    /** Allow the carousel to skip scroll snaps if it is dragged vigorously. Note that this option will be ignored if the dragFree option is set to `true`, `false` by default */
    skipSnaps?: boolean;
    /** Clear leading and trailing empty space that causes excessive scrolling. Use `trimSnaps` to only use snap points that trigger scrolling or keepSnaps to keep them. */
    containScroll?: 'trimSnaps' | 'keepSnaps' | '';
    /** Determines whether arrow key should switch slides, `true` by default */
    withKeyboardEvents?: boolean;
}
export type CarouselFactory = Factory<{
    props: CarouselProps;
    ref: HTMLDivElement;
    stylesNames: CarouselStylesNames;
    vars: CarouselCssVariables;
    staticComponents: {
        Slide: typeof CarouselSlide;
    };
}>;
export declare const Carousel: import("@mantine/core").MantineComponent<{
    props: CarouselProps;
    ref: HTMLDivElement;
    stylesNames: CarouselStylesNames;
    vars: CarouselCssVariables;
    staticComponents: {
        Slide: typeof CarouselSlide;
    };
}>;
//# sourceMappingURL=Carousel.d.ts.map