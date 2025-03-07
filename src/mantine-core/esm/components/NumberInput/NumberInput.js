import React from 'react';
import { NumericFormat } from 'react-number-format';
import { useUncontrolled, assignRef, clamp } from '@mantine/hooks';
import { NumberInputChevron } from './NumberInputChevron.js';
import classes from './NumberInput.module.css.js';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton.js';
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
function isValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}
function getDecrementedValue({ value, min, step = 1, allowNegative }) {
  const nextValue = value - step;
  if (min !== void 0 && nextValue < min) {
    return min;
  }
  if (!allowNegative && nextValue < 0 && min === void 0) {
    return value;
  }
  if (min !== void 0 && min >= 0 && nextValue <= min) {
    return nextValue;
  }
  return nextValue;
}
function isInRange(value, min, max) {
  if (value === void 0) {
    return true;
  }
  const minValid = min === void 0 || value >= min;
  const maxValid = max === void 0 || value <= max;
  return minValid && maxValid;
}
const defaultProps = {
  step: 1,
  size: "sm",
  clampBehavior: "blur",
  allowDecimal: true,
  allowNegative: true,
  startValue: 0
};
const varsResolver = createVarsResolver((_, { size }) => ({
  controls: {
    "--ni-chevron-size": getSize(size, "ni-chevron-size")
  }
}));
const NumberInput = factory((_props, ref) => {
  const props = useProps("NumberInput", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    unstyled,
    vars,
    onChange,
    onValueChange,
    value,
    defaultValue,
    max,
    min,
    step,
    hideControls,
    rightSection,
    isAllowed,
    clampBehavior,
    onBlur,
    allowDecimal,
    decimalScale,
    onKeyDown,
    handlersRef,
    startValue,
    disabled,
    rightSectionPointerEvents,
    allowNegative
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "vars",
    "onChange",
    "onValueChange",
    "value",
    "defaultValue",
    "max",
    "min",
    "step",
    "hideControls",
    "rightSection",
    "isAllowed",
    "clampBehavior",
    "onBlur",
    "allowDecimal",
    "decimalScale",
    "onKeyDown",
    "handlersRef",
    "startValue",
    "disabled",
    "rightSectionPointerEvents",
    "allowNegative"
  ]);
  const getStyles = useStyles({
    name: "NumberInput",
    classes,
    props,
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
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    onChange
  });
  const handleValueChange = (payload, event) => {
    setValue(isValidNumber(payload.floatValue) ? payload.floatValue : payload.value);
    onValueChange == null ? void 0 : onValueChange(payload, event);
  };
  const increment = () => {
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      setValue(min != null ? min : clamp(startValue, min, max));
    } else if (max !== void 0) {
      setValue(_value + step <= max ? _value + step : max);
    } else {
      setValue(_value + step);
    }
  };
  const decrement = () => {
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      setValue(max != null ? max : clamp(startValue, min, max));
    } else {
      setValue(getDecrementedValue({ value: _value, min, step, allowNegative }));
    }
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (event.key === "ArrowUp") {
      event.preventDefault();
      increment();
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      decrement();
    }
  };
  assignRef(handlersRef, { increment, decrement });
  const controls = /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("controls")), /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("control")), {
      tabIndex: -1,
      "aria-hidden": true,
      disabled: disabled || typeof _value === "number" && max !== void 0 && _value >= max,
      mod: { direction: "up" },
      onPointerDown: increment
    }),
    /* @__PURE__ */ React.createElement(NumberInputChevron, { direction: "up" })
  ), /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("control")), {
      tabIndex: -1,
      "aria-hidden": true,
      disabled: disabled || typeof _value === "number" && min !== void 0 && _value <= min,
      mod: { direction: "down" },
      onPointerDown: decrement
    }),
    /* @__PURE__ */ React.createElement(NumberInputChevron, { direction: "down" })
  ));
  return /* @__PURE__ */ React.createElement(
    InputBase,
    __spreadProps(__spreadValues({
      component: NumericFormat
    }, others), {
      disabled,
      value: _value,
      getInputRef: ref,
      onValueChange: handleValueChange,
      rightSection: hideControls ? rightSection : rightSection || controls,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      __staticSelector: "NumberInput",
      decimalScale: allowDecimal ? decimalScale : 0,
      onKeyDown: handleKeyDown,
      rightSectionPointerEvents: (rightSectionPointerEvents != null ? rightSectionPointerEvents : disabled) ? "none" : void 0,
      onBlur: (event) => {
        onBlur == null ? void 0 : onBlur(event);
        if (clampBehavior === "blur" && typeof _value === "number") {
          setValue(clamp(_value, min, max));
        }
      },
      isAllowed: (val) => {
        if (clampBehavior === "strict") {
          if (isAllowed) {
            return isAllowed(val) && isInRange(val.floatValue, min, max);
          }
          return isInRange(val.floatValue, min, max);
        }
        return isAllowed ? isAllowed(val) : true;
      }
    })
  );
});
NumberInput.classes = __spreadValues(__spreadValues({}, InputBase.classes), classes);
NumberInput.displayName = "@mantine/core/NumberInput";

export { NumberInput };
//# sourceMappingURL=NumberInput.js.map
