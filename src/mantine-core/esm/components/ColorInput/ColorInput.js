import React, { useState, useEffect } from 'react';
import { useUncontrolled, useEyeDropper, useDidUpdate } from '@mantine/hooks';
import { EyeDropperIcon } from './EyeDropperIcon.js';
import classes from './ColorInput.module.css.js';
import { useInputProps } from '../Input/use-input-props.js';
import { ActionIcon } from '../ActionIcon/ActionIcon.js';
import { convertHsvaTo } from '../ColorPicker/converters/converters.js';
import { parseColor, isColorValid } from '../ColorPicker/converters/parsers.js';
import { Input } from '../Input/Input.js';
import { Popover } from '../Popover/Popover.js';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch.js';
import { ColorPicker } from '../ColorPicker/ColorPicker.js';
import { InputBase } from '../InputBase/InputBase.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { useResolvedStylesApi } from '../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js';
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
  size: "sm",
  format: "hex",
  fixOnBlur: true,
  withPreview: true,
  swatchesPerRow: 10,
  withPicker: true,
  popoverProps: { transitionProps: { transition: "fade", duration: 0 } },
  withEyeDropper: true
};
const varsResolver = createVarsResolver((_, { size }) => ({
  eyeDropperIcon: {
    "--ci-eye-dropper-icon-size": getSize(size, "ci-eye-dropper-icon-size")
  },
  colorPreview: {
    "--ci-preview-size": getSize(size, "ci-preview-size")
  }
}));
const ColorInput = factory((_props, ref) => {
  const props = useProps("ColorInput", defaultProps, _props);
  const _a = useInputProps("ColorInput", defaultProps, _props), {
    classNames,
    styles,
    unstyled,
    disallowInput,
    fixOnBlur,
    popoverProps,
    withPreview,
    withEyeDropper,
    eyeDropperIcon,
    closeOnColorSwatchClick,
    eyeDropperButtonProps,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    onClick,
    onFocus,
    onBlur,
    inputProps,
    format,
    wrapperProps,
    readOnly,
    withPicker,
    swatches,
    disabled,
    leftSection,
    rightSection,
    swatchesPerRow
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "disallowInput",
    "fixOnBlur",
    "popoverProps",
    "withPreview",
    "withEyeDropper",
    "eyeDropperIcon",
    "closeOnColorSwatchClick",
    "eyeDropperButtonProps",
    "value",
    "defaultValue",
    "onChange",
    "onChangeEnd",
    "onClick",
    "onFocus",
    "onBlur",
    "inputProps",
    "format",
    "wrapperProps",
    "readOnly",
    "withPicker",
    "swatches",
    "disabled",
    "leftSection",
    "rightSection",
    "swatchesPerRow"
  ]);
  const getStyles = useStyles({
    name: "ColorInput",
    props,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars: props.vars,
    varsResolver
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [lastValidValue, setLastValidValue] = useState("");
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const { supported: eyeDropperSupported, open: openEyeDropper } = useEyeDropper();
  const eyeDropper = /* @__PURE__ */ React.createElement(
    ActionIcon,
    __spreadProps(__spreadValues(__spreadValues({}, eyeDropperButtonProps), getStyles("eyeDropperButton", {
      className: eyeDropperButtonProps == null ? void 0 : eyeDropperButtonProps.className,
      style: eyeDropperButtonProps == null ? void 0 : eyeDropperButtonProps.style
    })), {
      variant: "subtle",
      color: "gray",
      size: inputProps.size,
      onClick: () => openEyeDropper().then((payload) => {
        if (payload == null ? void 0 : payload.sRGBHex) {
          const color = convertHsvaTo(format, parseColor(payload.sRGBHex));
          setValue(color);
          onChangeEnd == null ? void 0 : onChangeEnd(color);
        }
      }).catch(() => {
      })
    }),
    eyeDropperIcon || /* @__PURE__ */ React.createElement(EyeDropperIcon, __spreadValues({}, getStyles("eyeDropperIcon")))
  );
  const handleInputFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setDropdownOpened(true);
  };
  const handleInputBlur = (event) => {
    fixOnBlur && setValue(lastValidValue);
    onBlur == null ? void 0 : onBlur(event);
    setDropdownOpened(false);
  };
  const handleInputClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    setDropdownOpened(true);
  };
  useEffect(() => {
    if (isColorValid(_value) || _value.trim() === "") {
      setLastValidValue(_value);
    }
  }, [_value]);
  useDidUpdate(() => {
    if (isColorValid(_value)) {
      setValue(convertHsvaTo(format, parseColor(_value)));
    }
  }, [format]);
  return /* @__PURE__ */ React.createElement(
    Input.Wrapper,
    __spreadProps(__spreadValues({}, wrapperProps), {
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: "ColorInput"
    }),
    /* @__PURE__ */ React.createElement(
      Popover,
      __spreadProps(__spreadValues({
        __staticSelector: "ColorInput",
        position: "bottom-start",
        offset: 5
      }, popoverProps), {
        opened: dropdownOpened,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        withRoles: false,
        disabled: readOnly || withPicker === false && (!Array.isArray(swatches) || swatches.length === 0)
      }),
      /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(
        Input,
        __spreadProps(__spreadValues(__spreadValues({
          autoComplete: "off"
        }, others), inputProps), {
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          disabled,
          ref,
          __staticSelector: "ColorInput",
          onFocus: handleInputFocus,
          onBlur: handleInputBlur,
          onClick: handleInputClick,
          spellCheck: false,
          value: _value,
          onChange: (event) => {
            const inputValue = event.currentTarget.value;
            setValue(inputValue);
            if (isColorValid(inputValue)) {
              onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(format, parseColor(inputValue)));
            }
          },
          leftSection: leftSection || (withPreview ? /* @__PURE__ */ React.createElement(
            ColorSwatch,
            __spreadValues({
              color: isColorValid(_value) ? _value : "#fff",
              size: "var(--ci-preview-size)"
            }, getStyles("colorPreview"))
          ) : null),
          readOnly: disallowInput || readOnly,
          pointer: disallowInput,
          unstyled,
          rightSection: rightSection || (withEyeDropper && !disabled && !readOnly && eyeDropperSupported ? eyeDropper : null)
        })
      )),
      /* @__PURE__ */ React.createElement(Popover.Dropdown, { onMouseDown: (event) => event.preventDefault(), p: inputProps.size }, /* @__PURE__ */ React.createElement(
        ColorPicker,
        {
          __staticSelector: "ColorInput",
          value: _value,
          onChange: setValue,
          onChangeEnd,
          format,
          swatches,
          swatchesPerRow,
          withPicker,
          size: inputProps.size,
          focusable: false,
          unstyled,
          styles: resolvedStyles,
          classNames: resolvedClassNames,
          onColorSwatchClick: () => closeOnColorSwatchClick && setDropdownOpened(false)
        }
      ))
    )
  );
});
ColorInput.classes = InputBase.classes;
ColorInput.displayName = "@mantine/core/ColorInput";

export { ColorInput };
//# sourceMappingURL=ColorInput.js.map
