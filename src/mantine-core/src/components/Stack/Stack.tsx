import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineSpacing,
  getSpacing,
  createVarsResolver,
} from '../../core';
import classes from './Stack.module.css';

export type StackStylesNames = 'root';
export type StackVariant = string;
export type StackCssVariables = '--stack-gap' | '--stack-align' | '--stack-justify';

export interface StackStylesParams {
  gap: MantineSpacing | string | number | undefined;
  align: React.CSSProperties['alignItems'] | undefined;
  justify: React.CSSProperties['justifyContent'] | undefined;
  variant: StackVariant | undefined;
}

export interface StackProps
  extends BoxProps,
    StylesApiProps<StackStylesNames, StackVariant, StackCssVariables, StackStylesParams>,
    ElementProps<'div'> {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem (1rem = 16px), `'md'` by default */
  gap?: MantineSpacing | (string & {}) | number;

  /** Controls `align-items` CSS property, `'stretch'` by default */
  align?: React.CSSProperties['alignItems'];

  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: React.CSSProperties['justifyContent'];
}

export interface StackFactory {
  props: StackProps;
  ref: HTMLDivElement;
  stylesNames: StackStylesNames;
  vars: StackCssVariables;
  stylesParams: StackStylesParams;
}

const defaultProps: Partial<StackProps> = {
  gap: 'md',
  align: 'stretch',
  justify: 'flex-start',
};

const varsResolver = createVarsResolver<StackCssVariables, StackStylesParams>(
  ({ gap, align, justify }) => ({
    '--stack-gap': getSpacing(gap),
    '--stack-align': align,
    '--stack-justify': justify,
  })
);

export const Stack = factory<StackFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant,
    ...others
  } = useProps('Stack', defaultProps, props);

  const getStyles = useStyles({
    name: 'Stack',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<StackStylesParams>('Stack', varsResolver, vars, {
    align,
    justify,
    gap,
    variant,
  });

  return <Box ref={ref} {...getStyles('root')} variant={variant} vars={_vars} {...others} />;
});

Stack.displayName = '@mantine/core/Stack';
