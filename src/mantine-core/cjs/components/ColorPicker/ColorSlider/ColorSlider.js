'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Thumb = require('../Thumb/Thumb.js');
var ColorPicker_context = require('../ColorPicker.context.js');
var MantineThemeProvider = require('../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var Box = require('../../../core/Box/Box.js');
var rem = require('../../../core/utils/units-converters/rem.js');

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
const ColorSlider = React.forwardRef((props, ref) => {
  const _a = props, {
    className,
    onChange,
    onChangeEnd,
    maxValue,
    round,
    size = "md",
    focusable = true,
    value,
    overlays,
    thumbColor = "transparent",
    onScrubStart,
    onScrubEnd
  } = _a, others = __objRest(_a, [
    "className",
    "onChange",
    "onChangeEnd",
    "maxValue",
    "round",
    "size",
    "focusable",
    "value",
    "overlays",
    "thumbColor",
    "onScrubStart",
    "onScrubEnd"
  ]);
  const { getStyles } = ColorPicker_context.useColorPickerContext();
  const theme = MantineThemeProvider.useMantineTheme();
  const [position, setPosition] = React.useState({ y: 0, x: value / maxValue });
  const positionRef = React.useRef(position);
  const getChangeValue = (val) => round ? Math.round(val * maxValue) : val * maxValue;
  const { ref: sliderRef } = hooks.useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange == null ? void 0 : onChange(getChangeValue(x));
    },
    {
      onScrubEnd: () => {
        const { x } = positionRef.current;
        onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue(x));
        onScrubEnd == null ? void 0 : onScrubEnd();
      },
      onScrubStart
    }
  );
  hooks.useDidUpdate(() => {
    setPosition({ y: 0, x: value / maxValue });
  }, [value]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = hooks.clampUseMovePosition(pos);
    onChange == null ? void 0 : onChange(getChangeValue(_position.x));
    onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue(_position.x));
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight": {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }
      case "ArrowLeft": {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };
  const layers = overlays.map((overlay, index) => /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, getStyles("sliderOverlay")), { style: overlay, key: index })));
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, others), {
      ref: hooks.useMergedRef(sliderRef, ref)
    }), getStyles("slider")), {
      role: "slider",
      "aria-valuenow": value,
      "aria-valuemax": maxValue,
      "aria-valuemin": 0,
      tabIndex: focusable ? 0 : -1,
      onKeyDown: handleKeyDown,
      "data-focus-ring": theme.focusRing
    }),
    layers,
    /* @__PURE__ */ React__default.createElement(
      Thumb.Thumb,
      __spreadValues({
        position,
        size
      }, getStyles("thumb", { style: { top: rem.rem(1), background: thumbColor } }))
    )
  );
});
ColorSlider.displayName = "@mantine/core/ColorSlider";

exports.ColorSlider = ColorSlider;
//# sourceMappingURL=ColorSlider.js.map
