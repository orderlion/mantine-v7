import React, { useRef, useState } from 'react';
import { useUncontrolled, useDidUpdate } from '@mantine/hooks';
import { AlphaSlider } from './AlphaSlider/AlphaSlider.js';
import { HueSlider } from './HueSlider/HueSlider.js';
import { Saturation } from './Saturation/Saturation.js';
import { Swatches } from './Swatches/Swatches.js';
import { ColorPickerProvider } from './ColorPicker.context.js';
import classes from './ColorPicker.module.css.js';
import { parseColor, isColorValid } from './converters/parsers.js';
import { convertHsvaTo } from './converters/converters.js';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize, getSpacing } from '../../core/utils/get-size/get-size.js';

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
  swatchesPerRow: 7,
  size: "sm",
  withPicker: true,
  focusable: true,
  __staticSelector: "ColorPicker"
};
const varsResolver = createVarsResolver(
  (_, { size, fullWidth, swatchesPerRow }) => ({
    wrapper: {
      "--cp-preview-size": getSize(size, "cp-preview-size"),
      "--cp-width": fullWidth ? "100%" : getSize(size, "cp-width"),
      "--cp-body-spacing": getSpacing(size),
      "--cp-swatch-size": `${100 / swatchesPerRow}%`,
      "--cp-thumb-size": getSize(size, "cp-thumb-size"),
      "--cp-saturation-height": getSize(size, "cp-saturation-height")
    }
  })
);
const ColorPicker = factory((_props, ref) => {
  const props = useProps("ColorPicker", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    format,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    withPicker,
    size,
    saturationLabel,
    hueLabel,
    alphaLabel,
    focusable,
    swatches,
    swatchesPerRow,
    fullWidth,
    onColorSwatchClick,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "format",
    "value",
    "defaultValue",
    "onChange",
    "onChangeEnd",
    "withPicker",
    "size",
    "saturationLabel",
    "hueLabel",
    "alphaLabel",
    "focusable",
    "swatches",
    "swatchesPerRow",
    "fullWidth",
    "onColorSwatchClick",
    "__staticSelector"
  ]);
  const getStyles = useStyles({
    name: __staticSelector,
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars,
    varsResolver
  });
  const formatRef = useRef(format);
  const valueRef = useRef();
  const scrubTimeoutRef = useRef(-1);
  const isScrubbingRef = useRef(false);
  const withAlpha = format === "hexa" || format === "rgba" || format === "hsla";
  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "#FFFFFF",
    onChange
  });
  const [parsed, setParsed] = useState(parseColor(_value));
  const startScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    isScrubbingRef.current = true;
  };
  const stopScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    scrubTimeoutRef.current = window.setTimeout(() => {
      isScrubbingRef.current = false;
    }, 200);
  };
  const handleChange = (color) => {
    setParsed((current) => {
      const next = __spreadValues(__spreadValues({}, current), color);
      valueRef.current = convertHsvaTo(formatRef.current, next);
      return next;
    });
    setValue(valueRef.current);
  };
  useDidUpdate(() => {
    if (isColorValid(value) && !isScrubbingRef.current) {
      setParsed(parseColor(value));
    }
  }, [value]);
  useDidUpdate(() => {
    formatRef.current = format;
    setValue(convertHsvaTo(format, parsed));
  }, [format]);
  return /* @__PURE__ */ React.createElement(ColorPickerProvider, { value: { getStyles } }, /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("wrapper")), { size }), others), withPicker && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Saturation,
    {
      value: parsed,
      onChange: handleChange,
      onChangeEnd: ({ s, v }) => onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { s, v }))),
      color: _value,
      size,
      focusable,
      saturationLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  ), /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("sliders")), /* @__PURE__ */ React.createElement(
    HueSlider,
    {
      value: parsed.h,
      onChange: (h) => handleChange({ h }),
      onChangeEnd: (h) => onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { h }))),
      size,
      focusable,
      "aria-label": hueLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  ), withAlpha && /* @__PURE__ */ React.createElement(
    AlphaSlider,
    {
      value: parsed.a,
      onChange: (a) => handleChange({ a }),
      onChangeEnd: (a) => {
        onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { a })));
      },
      size,
      color: convertHsvaTo("hex", parsed),
      focusable,
      "aria-label": alphaLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  )), withAlpha && /* @__PURE__ */ React.createElement(ColorSwatch, __spreadValues({ color: _value, radius: "sm" }, getStyles("preview"))))), Array.isArray(swatches) && /* @__PURE__ */ React.createElement(
    Swatches,
    {
      data: swatches,
      swatchesPerRow,
      focusable,
      setValue,
      onChangeEnd: (color) => {
        const convertedColor = convertHsvaTo(format, parseColor(color));
        onColorSwatchClick == null ? void 0 : onColorSwatchClick(convertedColor);
        onChangeEnd == null ? void 0 : onChangeEnd(convertedColor);
        if (!controlled) {
          setParsed(parseColor(color));
        }
      }
    }
  )));
});
ColorPicker.classes = classes;
ColorPicker.displayName = "@mantine/core/ColorPicker";

export { ColorPicker };
//# sourceMappingURL=ColorPicker.js.map
