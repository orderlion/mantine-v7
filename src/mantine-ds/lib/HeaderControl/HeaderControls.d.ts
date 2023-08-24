import React from 'react';
import { BoxProps } from '@mantine/core';
interface HeaderControlsProps extends BoxProps {
    onSearch(): void;
    githubLink: string;
}
export declare function HeaderControls({ onSearch, githubLink, ...others }: HeaderControlsProps): React.JSX.Element;
export {};
