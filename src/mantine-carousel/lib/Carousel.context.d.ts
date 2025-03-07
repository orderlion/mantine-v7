/// <reference types="react" />
import { GetStylesApi } from '@mantine/core';
import type { CarouselFactory } from './Carousel';
interface CarouselContextValue {
    getStyles: GetStylesApi<CarouselFactory>;
    orientation: 'horizontal' | 'vertical' | undefined;
}
export declare const CarouselProvider: ({ children, value }: {
    value: CarouselContextValue;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useCarouselContext: () => CarouselContextValue;
export {};
//# sourceMappingURL=Carousel.context.d.ts.map