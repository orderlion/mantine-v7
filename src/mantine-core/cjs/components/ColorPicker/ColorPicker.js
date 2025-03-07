'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var AlphaSlider = require('./AlphaSlider/AlphaSlider.js');
var HueSlider = require('./HueSlider/HueSlider.js');
var Saturation = require('./Saturation/Saturation.js');
var Swatches = require('./Swatches/Swatches.js');
var ColorPicker_context = require('./ColorPicker.context.js');
var ColorPicker_module = require('./ColorPicker.module.css.js');
var parsers = require('./converters/parsers.js');
var converters = require('./converters/converters.js');
var ColorSwatch = require('../ColorSwatch/ColorSwatch.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const varsResolver = createVarsResolver.createVarsResolver(
  (_, { size, fullWidth, swatchesPerRow }) => ({
    wrapper: {
      "--cp-preview-size": getSize.getSize(size, "cp-preview-size"),
      "--cp-width": fullWidth ? "100%" : getSize.getSize(size, "cp-width"),
      "--cp-body-spacing": getSize.getSpacing(size),
      "--cp-swatch-size": `${100 / swatchesPerRow}%`,
      "--cp-thumb-size": getSize.getSize(size, "cp-thumb-size"),
      "--cp-saturation-height": getSize.getSize(size, "cp-saturation-height")
    }
  })
);
const ColorPicker = factory.factory((_props, ref) => {
  const props = useProps.useProps("ColorPicker", defaultProps, _props);
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
  const getStyles = useStyles.useStyles({
    name: __staticSelector,
    props,
    classes: ColorPicker_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars,
    varsResolver
  });
  const formatRef = React.useRef(format);
  const valueRef = React.useRef();
  const scrubTimeoutRef = React.useRef(-1);
  const isScrubbingRef = React.useRef(false);
  const withAlpha = format === "hexa" || format === "rgba" || format === "hsla";
  const [_value, setValue, controlled] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: "#FFFFFF",
    onChange
  });
  const [parsed, setParsed] = React.useState(parsers.parseColor(_value));
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
      valueRef.current = converters.convertHsvaTo(formatRef.current, next);
      return next;
    });
    setValue(valueRef.current);
  };
  hooks.useDidUpdate(() => {
    if (parsers.isColorValid(value) && !isScrubbingRef.current) {
      setParsed(parsers.parseColor(value));
    }
  }, [value]);
  hooks.useDidUpdate(() => {
    formatRef.current = format;
    setValue(converters.convertHsvaTo(format, parsed));
  }, [format]);
  return /* @__PURE__ */ React__default.createElement(ColorPicker_context.ColorPickerProvider, { value: { getStyles } }, /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("wrapper")), { size }), others), withPicker && /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    Saturation.Saturation,
    {
      value: parsed,
      onChange: handleChange,
      onChangeEnd: ({ s, v }) => onChangeEnd == null ? void 0 : onChangeEnd(converters.convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { s, v }))),
      color: _value,
      size,
      focusable,
      saturationLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  ), /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("sliders")), /* @__PURE__ */ React__default.createElement(
    HueSlider.HueSlider,
    {
      value: parsed.h,
      onChange: (h) => handleChange({ h }),
      onChangeEnd: (h) => onChangeEnd == null ? void 0 : onChangeEnd(converters.convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { h }))),
      size,
      focusable,
      "aria-label": hueLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  ), withAlpha && /* @__PURE__ */ React__default.createElement(
    AlphaSlider.AlphaSlider,
    {
      value: parsed.a,
      onChange: (a) => handleChange({ a }),
      onChangeEnd: (a) => {
        onChangeEnd == null ? void 0 : onChangeEnd(converters.convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { a })));
      },
      size,
      color: converters.convertHsvaTo("hex", parsed),
      focusable,
      "aria-label": alphaLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  )), withAlpha && /* @__PURE__ */ React__default.createElement(ColorSwatch.ColorSwatch, __spreadValues({ color: _value, radius: "sm" }, getStyles("preview"))))), Array.isArray(swatches) && /* @__PURE__ */ React__default.createElement(
    Swatches.Swatches,
    {
      data: swatches,
      swatchesPerRow,
      focusable,
      setValue,
      onChangeEnd: (color) => {
        const convertedColor = converters.convertHsvaTo(format, parsers.parseColor(color));
        onColorSwatchClick == null ? void 0 : onColorSwatchClick(convertedColor);
        onChangeEnd == null ? void 0 : onChangeEnd(convertedColor);
        if (!controlled) {
          setParsed(parsers.parseColor(color));
        }
      }
    }
  )));
});
ColorPicker.classes = ColorPicker_module['default'];
ColorPicker.displayName = "@mantine/core/ColorPicker";

exports.ColorPicker = ColorPicker;
//# sourceMappingURL=ColorPicker.js.map
