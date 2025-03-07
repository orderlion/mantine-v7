import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorControlsGroupStylesNames = 'controlsGroup';
export interface RichTextEditorControlsGroupProps
  extends BoxProps,
    StylesApiProps<RichTextEditorControlsGroupFactory>,
    ElementProps<'div'> {}

export type RichTextEditorControlsGroupFactory = Factory<{
  props: RichTextEditorControlsGroupProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorControlsGroupStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorControlsGroupProps> = {};

export const RichTextEditorControlsGroup = factory<RichTextEditorControlsGroupFactory>(
  (_props, ref) => {
    const props = useProps('RichTextEditorControlsGroup', defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, ...others } = props;
    const ctx = useRichTextEditorContext();
    return (
      <Box
        ref={ref}
        {...ctx.getStyles('controlsGroup', { className, style, styles, classNames })}
        {...others}
      />
    );
  }
);

RichTextEditorControlsGroup.classes = classes;
RichTextEditorControlsGroup.displayName = '@mantine/tiptap/RichTextEditorControlsGroup';
