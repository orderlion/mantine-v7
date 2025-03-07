import React from 'react';
import cx from 'clsx';
import { useId, useUncontrolled } from '@mantine/hooks';
import { PasswordToggleIcon } from './PasswordToggleIcon.js';
import classes from './PasswordInput.module.css.js';
import { ActionIcon } from '../ActionIcon/ActionIcon.js';
import { Input } from '../Input/Input.js';
import { InputBase } from '../InputBase/InputBase.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { useResolvedStylesApi } from '../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js';
import { extractStyleProps } from '../../core/Box/style-props/extract-style-props/extract-style-props.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize } from '../../core/utils/get-size/get-size.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  __staticSelector: "PasswordInput",
  visibilityToggleIcon: PasswordToggleIcon,
  size: "sm"
};
const varsResolver = createVarsResolver((_, { size }) => ({
  root: {
    "--psi-icon-size": getSize(size, "psi-icon-size"),
    "--psi-button-size": getSize(size, "psi-button-size")
  }
}));
const PasswordInput = factory((_props, ref) => {
  const props = useProps("PasswordInput", defaultProps, _props);
  const _a = props, {
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
    leftSectionProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "required",
    "error",
    "leftSection",
    "disabled",
    "id",
    "variant",
    "inputContainer",
    "description",
    "label",
    "size",
    "__staticSelector",
    "errorProps",
    "descriptionProps",
    "labelProps",
    "withAsterisk",
    "inputWrapperOrder",
    "wrapperProps",
    "radius",
    "rightSection",
    "rightSectionWidth",
    "leftSectionWidth",
    "visible",
    "defaultVisible",
    "onVisibilityChange",
    "visibilityToggleIcon",
    "visibilityToggleButtonProps",
    "rightSectionProps",
    "leftSectionProps"
  ]);
  const uuid = useId(id);
  const [_visible, setVisibility] = useUncontrolled({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange
  });
  const toggleVisibility = () => setVisibility(!_visible);
  const getStyles = useStyles({
    name: "PasswordInput",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const { styleProps, rest } = extractStyleProps(others);
  const VisibilityToggleIcon = visibilityToggleIcon;
  const visibilityToggleButton = /* @__PURE__ */ React.createElement(
    ActionIcon,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("visibilityToggle")), {
      radius,
      "aria-hidden": !visibilityToggleButtonProps
    }), visibilityToggleButtonProps), {
      variant: "subtle",
      color: "gray",
      unstyled,
      onMouseDown: (event) => {
        event.preventDefault();
        toggleVisibility();
      },
      onKeyDown: (event) => {
        if (event.key === " ") {
          event.preventDefault();
          toggleVisibility();
        }
      }
    }),
    /* @__PURE__ */ React.createElement(VisibilityToggleIcon, { reveal: _visible })
  );
  return /* @__PURE__ */ React.createElement(
    Input.Wrapper,
    __spreadValues(__spreadValues(__spreadValues({
      required,
      id: uuid,
      label,
      error,
      description,
      size,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector,
      errorProps,
      descriptionProps,
      unstyled,
      withAsterisk,
      inputWrapperOrder,
      inputContainer,
      variant,
      labelProps: __spreadProps(__spreadValues({}, labelProps), { htmlFor: uuid })
    }, getStyles("root")), styleProps), wrapperProps),
    /* @__PURE__ */ React.createElement(
      Input,
      {
        component: "div",
        error,
        leftSection,
        size,
        classNames: __spreadProps(__spreadValues({}, resolvedClassNames), { input: cx(classes.input, resolvedClassNames.input) }),
        styles: resolvedStyles,
        radius,
        disabled,
        __staticSelector,
        rightSectionWidth,
        rightSection: rightSection != null ? rightSection : visibilityToggleButton,
        variant,
        unstyled,
        leftSectionWidth,
        rightSectionPointerEvents: "all",
        rightSectionProps,
        leftSectionProps
      },
      /* @__PURE__ */ React.createElement(
        "input",
        __spreadProps(__spreadValues(__spreadProps(__spreadValues({
          required,
          "data-invalid": !!error || void 0,
          "data-with-left-section": !!leftSection || void 0
        }, getStyles("innerInput")), {
          disabled,
          id: uuid,
          ref
        }), rest), {
          type: _visible ? "text" : "password"
        })
      )
    )
  );
});
PasswordInput.classes = __spreadValues(__spreadValues({}, InputBase.classes), classes);
PasswordInput.displayName = "@mantine/core/PasswordInput";

export { PasswordInput };
//# sourceMappingURL=PasswordInput.js.map
