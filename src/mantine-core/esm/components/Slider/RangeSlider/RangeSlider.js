import React, { useState, useRef, useEffect } from 'react';
import { useUncontrolled, useMove } from '@mantine/hooks';
import { SliderProvider } from '../Slider.context.js';
import { SliderRoot } from '../SliderRoot/SliderRoot.js';
import { Track } from '../Track/Track.js';
import { Thumb } from '../Thumb/Thumb.js';
import { getPosition } from '../utils/get-position/get-position.js';
import { getChangeValue } from '../utils/get-change-value/get-change-value.js';
import { getPrecision } from '../utils/get-precision/get-precision.js';
import { getFloatingValue } from '../utils/get-floating-value/get-gloating-value.js';
import { getClientPosition } from '../utils/get-client-position/get-client-position.js';
import classes from '../Slider.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../../core/styles-api/use-styles/use-styles.js';
import { useDirection } from '../../../core/DirectionProvider/DirectionProvider.js';
import { createVarsResolver } from '../../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize, getRadius } from '../../../core/utils/get-size/get-size.js';
import { getThemeColor } from '../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';
import { rem } from '../../../core/utils/units-converters/rem.js';

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
const varsResolver = createVarsResolver(
  (theme, { size, color, thumbSize, radius }) => ({
    root: {
      "--slider-size": getSize(size, "slider-size"),
      "--slider-color": getThemeColor(color, theme),
      "--slider-radius": getRadius(radius),
      "--slider-thumb-size": typeof thumbSize !== "undefined" ? rem(thumbSize) : "calc(var(--slider-size) * 2)"
    }
  })
);
const defaultProps = {
  size: "md",
  radius: "xl",
  min: 0,
  max: 100,
  minRange: 10,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: false,
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v
};
const RangeSlider = factory((_props, ref) => {
  const props = useProps("RangeSlider", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
    minRange,
    maxRange,
    step,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbFromLabel,
    thumbToLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    className,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "value",
    "onChange",
    "onChangeEnd",
    "size",
    "min",
    "max",
    "minRange",
    "maxRange",
    "step",
    "precision",
    "defaultValue",
    "name",
    "marks",
    "label",
    "labelTransitionProps",
    "labelAlwaysOn",
    "thumbFromLabel",
    "thumbToLabel",
    "showLabelOnHover",
    "thumbChildren",
    "disabled",
    "unstyled",
    "scale",
    "inverted",
    "className",
    "style",
    "vars"
  ]);
  const getStyles = useStyles({
    name: "Slider",
    props,
    classes,
    classNames,
    className,
    styles,
    style,
    vars,
    varsResolver
  });
  const { dir } = useDirection();
  const [focused, setFocused] = useState(-1);
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [min, max],
    onChange
  });
  const valueRef = useRef(_value);
  const thumbs = useRef([]);
  const thumbIndex = useRef(void 0);
  const positions = [
    getPosition({ value: _value[0], min, max }),
    getPosition({ value: _value[1], min, max })
  ];
  const precision = _precision != null ? _precision : getPrecision(step);
  const _setValue = (val) => {
    setValue(val);
    valueRef.current = val;
  };
  useEffect(
    () => {
      if (Array.isArray(value)) {
        valueRef.current = value;
      }
    },
    Array.isArray(value) ? [value[0], value[1]] : [null, null]
  );
  const setRangedValue = (val, index, triggerChangeEnd) => {
    const clone = [...valueRef.current];
    clone[index] = val;
    if (index === 0) {
      if (val > clone[1] - (minRange - 1e-9)) {
        clone[1] = Math.min(val + minRange, max);
      }
      if (val > (max - (minRange - 1e-9) || min)) {
        clone[index] = valueRef.current[index];
      }
      if (clone[1] - val > maxRange) {
        clone[1] = val + maxRange;
      }
    }
    if (index === 1) {
      if (val < clone[0] + minRange) {
        clone[0] = Math.max(val - minRange, min);
      }
      if (val < clone[0] + minRange) {
        clone[index] = valueRef.current[index];
      }
      if (val - clone[0] > maxRange) {
        clone[0] = val - maxRange;
      }
    }
    _setValue(clone);
    if (triggerChangeEnd) {
      onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current);
    }
  };
  const handleChange = (val) => {
    if (!disabled) {
      const nextValue = getChangeValue({
        value: val,
        min,
        max,
        step,
        precision
      });
      setRangedValue(nextValue, thumbIndex.current, false);
    }
  };
  const { ref: container, active } = useMove(
    ({ x }) => handleChange(x),
    { onScrubEnd: () => onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current) },
    dir
  );
  function handleThumbMouseDown(index) {
    thumbIndex.current = index;
  }
  const handleTrackMouseDownCapture = (event) => {
    container.current.focus();
    const rect = container.current.getBoundingClientRect();
    const changePosition = getClientPosition(event.nativeEvent);
    const changeValue = getChangeValue({
      value: changePosition - rect.left,
      max,
      min,
      step,
      containerWidth: rect.width
    });
    const nearestHandle = Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;
    const _nearestHandle = dir === "ltr" ? nearestHandle : nearestHandle === 1 ? 0 : 1;
    thumbIndex.current = _nearestHandle;
  };
  const getFocusedThumbIndex = () => {
    if (focused !== 1 && focused !== 0) {
      setFocused(0);
      return 0;
    }
    return focused;
  };
  const handleTrackKeydownCapture = (event) => {
    if (!disabled) {
      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(Math.max(valueRef.current[focusedIndex] + step, min), max),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowRight": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(
                Math.max(
                  dir === "rtl" ? valueRef.current[focusedIndex] - step : valueRef.current[focusedIndex] + step,
                  min
                ),
                max
              ),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(Math.max(valueRef.current[focusedIndex] - step, min), max),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(
                Math.max(
                  dir === "rtl" ? valueRef.current[focusedIndex] + step : valueRef.current[focusedIndex] - step,
                  min
                ),
                max
              ),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
      }
    }
  };
  const sharedThumbProps = {
    max,
    min,
    size,
    labelTransitionProps,
    labelAlwaysOn,
    onBlur: () => setFocused(-1)
  };
  const hasArrayThumbChildren = Array.isArray(thumbChildren);
  return /* @__PURE__ */ React.createElement(SliderProvider, { value: { getStyles } }, /* @__PURE__ */ React.createElement(SliderRoot, __spreadProps(__spreadValues({}, others), { size, ref, disabled }), /* @__PURE__ */ React.createElement(
    Track,
    {
      offset: positions[0],
      marksOffset: _value[0],
      filled: positions[1] - positions[0],
      marks,
      inverted,
      min,
      max,
      value: _value[1],
      disabled,
      containerProps: {
        ref: container,
        onMouseEnter: showLabelOnHover ? () => setHovered(true) : void 0,
        onMouseLeave: showLabelOnHover ? () => setHovered(false) : void 0,
        onTouchStartCapture: handleTrackMouseDownCapture,
        onTouchEndCapture: () => {
          thumbIndex.current = -1;
        },
        onMouseDownCapture: handleTrackMouseDownCapture,
        onMouseUpCapture: () => {
          thumbIndex.current = -1;
        },
        onKeyDownCapture: handleTrackKeydownCapture
      }
    },
    /* @__PURE__ */ React.createElement(
      Thumb,
      __spreadProps(__spreadValues({}, sharedThumbProps), {
        value: scale(_value[0]),
        position: positions[0],
        dragging: active,
        label: typeof label === "function" ? label(scale(_value[0])) : label,
        ref: (node) => {
          thumbs.current[0] = node;
        },
        thumbLabel: thumbFromLabel,
        onMouseDown: () => handleThumbMouseDown(0),
        onFocus: () => setFocused(0),
        showLabelOnHover,
        isHovered: hovered,
        disabled
      }),
      hasArrayThumbChildren ? thumbChildren[0] : thumbChildren
    ),
    /* @__PURE__ */ React.createElement(
      Thumb,
      __spreadProps(__spreadValues({}, sharedThumbProps), {
        thumbLabel: thumbToLabel,
        value: scale(_value[1]),
        position: positions[1],
        dragging: active,
        label: typeof label === "function" ? label(scale(_value[1])) : label,
        ref: (node) => {
          thumbs.current[1] = node;
        },
        onMouseDown: () => handleThumbMouseDown(1),
        onFocus: () => setFocused(1),
        showLabelOnHover,
        isHovered: hovered,
        disabled
      }),
      hasArrayThumbChildren ? thumbChildren[1] : thumbChildren
    )
  ), /* @__PURE__ */ React.createElement("input", { type: "hidden", name: `${name}_from`, value: _value[0] }), /* @__PURE__ */ React.createElement("input", { type: "hidden", name: `${name}_to`, value: _value[1] })));
});
RangeSlider.classes = classes;
RangeSlider.displayName = "@mantine/core/RangeSlider";

export { RangeSlider };
//# sourceMappingURL=RangeSlider.js.map
