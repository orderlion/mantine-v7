import React from 'react';
import { CarouselProps } from '@mantine/carousel';
import { MantineDemo } from '@mantine/ds';
interface CardProps {
    image: string;
    title: string;
    category: string;
}
export declare function Card({ image, title, category }: CardProps): React.JSX.Element;
export declare function CarouselCardsDemos(props: CarouselProps): React.JSX.Element;
export declare const cards: MantineDemo;
export {};
