import { BoxProps, StylesApiProps, ElementProps, Factory } from '@mantine/core';
export type CarouselSlideStylesNames = 'slide';
export interface CarouselSlideProps extends BoxProps, StylesApiProps<CarouselSlideFactory>, ElementProps<'div'> {
}
export type CarouselSlideFactory = Factory<{
    props: CarouselSlideProps;
    ref: HTMLDivElement;
    stylesNames: CarouselSlideStylesNames;
    compound: true;
}>;
export declare const CarouselSlide: import("@mantine/core").MantineComponent<{
    props: CarouselSlideProps;
    ref: HTMLDivElement;
    stylesNames: CarouselSlideStylesNames;
    compound: true;
}>;
//# sourceMappingURL=CarouselSlide.d.ts.map