import React, { useState, useRef, useEffect } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { createPinArray } from './create-pin-array/create-pin-array.js';
import classes from './PinInput.module.css.js';
import { Group } from '../Group/Group.js';
import { Input } from '../Input/Input.js';
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
const regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i
};
const defaultProps = {
  size: "sm",
  gap: "sm",
  length: 4,
  manageFocus: true,
  oneTimeCode: true,
  placeholder: "\u25CB",
  type: "alphanumeric",
  ariaLabel: "PinInput"
};
const varsResolver = createVarsResolver((_, { size }) => ({
  root: {
    "--pin-input-size": getSize(size != null ? size : defaultProps.size, "pin-input-size")
  }
}));
const PinInput = factory((props, ref) => {
  const _a = useProps("PinInput", defaultProps, props), {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    gap,
    style,
    size,
    classNames,
    styles,
    unstyled,
    length,
    onChange,
    onComplete,
    manageFocus,
    autoFocus,
    error,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    readOnly,
    inputType,
    inputMode,
    ariaLabel,
    vars
  } = _a, others = __objRest(_a, [
    "name",
    "form",
    "className",
    "value",
    "defaultValue",
    "variant",
    "gap",
    "style",
    "size",
    "classNames",
    "styles",
    "unstyled",
    "length",
    "onChange",
    "onComplete",
    "manageFocus",
    "autoFocus",
    "error",
    "radius",
    "disabled",
    "oneTimeCode",
    "placeholder",
    "type",
    "mask",
    "readOnly",
    "inputType",
    "inputMode",
    "ariaLabel",
    "vars"
  ]);
  const uuid = useId(name);
  const getStyles = useStyles({
    name: "PinInput",
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
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [_value, setValues] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const inputsRef = useRef([]);
  const validate = (code) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re == null ? void 0 : re.test(code);
  };
  const focusInputField = (dir, index) => {
    if (!manageFocus)
      return;
    if (dir === "next") {
      const nextIndex = index + 1;
      inputsRef.current[nextIndex < (length != null ? length : 0) ? nextIndex : index].focus();
    }
    if (dir === "prev") {
      const nextIndex = index - 1;
      inputsRef.current[nextIndex > -1 ? nextIndex : index].focus();
    }
  };
  const setFieldValue = (val, index) => {
    const values = [...createPinArray(length != null ? length : 0, _value)];
    values[index] = val;
    setValues(values.join(""));
  };
  const handleChange = (event, index) => {
    const inputValue = event.target.value;
    const nextChar = inputValue.length > 1 ? inputValue.split("")[inputValue.length - 1] : inputValue;
    const isValid = validate(nextChar);
    if (isValid) {
      setFieldValue(nextChar, index);
      focusInputField("next", index);
    } else {
      setFieldValue("", index);
    }
  };
  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusInputField("prev", index);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusInputField("next", index);
    } else if (event.key === "Delete") {
      event.preventDefault();
      setFieldValue("", index);
    } else if (event.key === "Backspace") {
      event.preventDefault();
      setFieldValue("", index);
      if (length === index + 1) {
        if (event.target.value === "") {
          focusInputField("prev", index);
        }
      } else {
        focusInputField("prev", index);
      }
    }
  };
  const handleFocus = (event, index) => {
    event.target.select();
    setFocusedIndex(index);
  };
  const handleBlur = () => {
    setFocusedIndex(-1);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const copyValue = event.clipboardData.getData("Text");
    const isValid = validate(copyValue);
    if (isValid) {
      setValues(copyValue);
    }
  };
  useEffect(() => {
    if (_value.length !== length)
      return;
    onComplete == null ? void 0 : onComplete(_value);
  }, [_value]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Group,
    __spreadProps(__spreadValues(__spreadValues({}, others), getStyles("root")), {
      role: "group",
      id: uuid,
      gap,
      ref,
      unstyled,
      wrap: "nowrap",
      variant,
      __size: size
    }),
    createPinArray(length != null ? length : 0, _value).map((char, index) => /* @__PURE__ */ React.createElement(
      Input,
      __spreadProps(__spreadValues({
        component: "input"
      }, getStyles("pinInput", {
        style: {
          "--_input-padding": "0",
          "--_input-text-align": "center"
        }
      })), {
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        size,
        __staticSelector: "PinInput",
        id: `${uuid}-${index + 1}`,
        key: `${uuid}-${index}`,
        inputMode: inputMode || (type === "number" ? "numeric" : "text"),
        onChange: (event) => handleChange(event, index),
        onKeyDown: (event) => handleKeyDown(event, index),
        onFocus: (event) => handleFocus(event, index),
        onBlur: handleBlur,
        onPaste: handlePaste,
        type: inputType || (mask ? "password" : type === "number" ? "tel" : "text"),
        radius,
        error,
        variant,
        disabled,
        ref: (node) => {
          inputsRef.current[index] = node;
        },
        autoComplete: oneTimeCode ? "one-time-code" : "off",
        placeholder: focusedIndex === index ? "" : placeholder,
        value: char,
        autoFocus: autoFocus && index === 0,
        unstyled,
        "aria-label": ariaLabel,
        readOnly
      })
    ))
  ), /* @__PURE__ */ React.createElement("input", { type: "hidden", name, form, value: _value }));
});
PinInput.classes = __spreadValues(__spreadValues({}, classes), InputBase.classes);
PinInput.displayName = "@mantine/core/PinInput";

export { PinInput };
//# sourceMappingURL=PinInput.js.map
