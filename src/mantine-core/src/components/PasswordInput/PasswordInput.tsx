import React from 'react';
import cx from 'clsx';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  extractStyleProps,
  useResolvedStylesApi,
  getSize,
} from '../../core';
import { InputBase, InputBaseProps } from '../InputBase';
import { Input, InputVariant, __InputStylesNames } from '../Input';
import { ActionIcon } from '../ActionIcon';
import { PasswordToggleIcon } from './PasswordToggleIcon';
import classes from './PasswordInput.module.css';

export type PasswordInputStylesNames =
  | 'root'
  | 'visibilityToggle'
  | 'innerInput'
  | __InputStylesNames;
export type PasswordInputCssVariables = {
  root: '--psi-icon-size' | '--psi-button-size';
};

export interface PasswordInputProps
  extends Omit<InputBaseProps, 'classNames' | 'styles' | 'vars'>,
    StylesApiProps<PasswordInputFactory>,
    ElementProps<'input', 'size'> {
  /** Custom visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean }>;

  /** Props passed down to the visibility toggle button */
  visibilityToggleButtonProps?: Record<string, any>;

  /** Determines whether input content should be visible (controlled) */
  visible?: boolean;

  /** Determines whether input content should be visible (uncontrolled) */
  defaultVisible?: boolean;

  /** Called when visibility changes */
  onVisibilityChange?(visible: boolean): void;
}

export type PasswordInputFactory = Factory<{
  props: PasswordInputProps;
  ref: HTMLInputElement;
  stylesNames: PasswordInputStylesNames;
  vars: PasswordInputCssVariables;
  variant: InputVariant;
}>;

const defaultProps: Partial<PasswordInputProps> = {
  __staticSelector: 'PasswordInput',
  visibilityToggleIcon: PasswordToggleIcon,
  size: 'sm',
};

const varsResolver = createVarsResolver<PasswordInputFactory>((_, { size }) => ({
  root: {
    '--psi-icon-size': getSize(size, 'psi-icon-size'),
    '--psi-button-size': getSize(size, 'psi-button-size'),
  },
}));

export const PasswordInput = factory<PasswordInputFactory>((_props, ref) => {
  const props = useProps('PasswordInput', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    required,
    error,
    leftSection,
    disabled,
    id,
    variant,
    inputContainer,
    description,
    label,
    size,
    __staticSelector,
    errorProps,
    descriptionProps,
    labelProps,
    withAsterisk,
    inputWrapperOrder,
    wrapperProps,
    radius,
    rightSection,
    rightSectionWidth,
    leftSectionWidth,
    visible,
    defaultVisible,
    onVisibilityChange,
    visibilityToggleIcon,
    visibilityToggleButtonProps,
    rightSectionProps,
    leftSectionProps,
    ...others
  } = props;

  const uuid = useId(id);

  const [_visible, setVisibility] = useUncontrolled({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange,
  });

  const toggleVisibility = () => setVisibility(!_visible);

  const getStyles = useStyles<PasswordInputFactory>({
    name: 'PasswordInput',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PasswordInputFactory>({
    classNames,
    styles,
    props,
  });

  const { styleProps, rest } = extractStyleProps(others);
  const VisibilityToggleIcon = visibilityToggleIcon!;

  const visibilityToggleButton = (
    <ActionIcon<'button'>
      {...getStyles('visibilityToggle')}
      radius={radius}
      aria-hidden={!visibilityToggleButtonProps}
      {...visibilityToggleButtonProps}
      variant="subtle"
      color="gray"
      unstyled={unstyled}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleVisibility();
      }}
      onKeyDown={(event) => {
        if (event.key === ' ') {
          event.preventDefault();
          toggleVisibility();
        }
      }}
    >
      <VisibilityToggleIcon reveal={_visible} />
    </ActionIcon>
  );

  return (
    <Input.Wrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
      size={size}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector={__staticSelector}
      errorProps={errorProps}
      descriptionProps={descriptionProps}
      unstyled={unstyled}
      withAsterisk={withAsterisk}
      inputWrapperOrder={inputWrapperOrder}
      inputContainer={inputContainer}
      variant={variant}
      labelProps={{ ...labelProps, htmlFor: uuid }}
      {...getStyles('root')}
      {...styleProps}
      {...wrapperProps}
    >
      <Input<'div'>
        component="div"
        error={error}
        leftSection={leftSection}
        size={size}
        classNames={{ ...resolvedClassNames, input: cx(classes.input, resolvedClassNames.input) }}
        styles={resolvedStyles}
        radius={radius}
        disabled={disabled}
        __staticSelector={__staticSelector}
        rightSectionWidth={rightSectionWidth}
        rightSection={rightSection ?? visibilityToggleButton}
        variant={variant}
        unstyled={unstyled}
        leftSectionWidth={leftSectionWidth}
        rightSectionPointerEvents="all"
        rightSectionProps={rightSectionProps}
        leftSectionProps={leftSectionProps}
      >
        <input
          required={required}
          data-invalid={!!error || undefined}
          data-with-left-section={!!leftSection || undefined}
          {...getStyles('innerInput')}
          disabled={disabled}
          id={uuid}
          ref={ref}
          {...rest}
          type={_visible ? 'text' : 'password'}
        />
      </Input>
    </Input.Wrapper>
  );
});

PasswordInput.classes = { ...InputBase.classes, ...classes };
PasswordInput.displayName = '@mantine/core/PasswordInput';
