import React, { useState, useRef, useEffect } from 'react';
import { useMove, clampUseMovePosition } from '@mantine/hooks';
import { Thumb } from '../Thumb/Thumb.js';
import { useColorPickerContext } from '../ColorPicker.context.js';
import { convertHsvaTo } from '../converters/converters.js';
import { Box } from '../../../core/Box/Box.js';

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
function Saturation(_a) {
  var _b = _a, {
    className,
    onChange,
    onChangeEnd,
    value,
    saturationLabel,
    focusable = true,
    size,
    color,
    onScrubStart,
    onScrubEnd
  } = _b, others = __objRest(_b, [
    "className",
    "onChange",
    "onChangeEnd",
    "value",
    "saturationLabel",
    "focusable",
    "size",
    "color",
    "onScrubStart",
    "onScrubEnd"
  ]);
  const { getStyles } = useColorPickerContext();
  const [position, setPosition] = useState({ x: value.s / 100, y: 1 - value.v / 100 });
  const positionRef = useRef(position);
  const { ref } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
        onScrubEnd == null ? void 0 : onScrubEnd();
      },
      onScrubStart
    }
  );
  useEffect(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
    onChangeEnd({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp": {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }
      case "ArrowDown": {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }
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
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("saturation")), {
      ref
    }), others), {
      role: "slider",
      "aria-label": saturationLabel,
      "aria-valuenow": position.x,
      "aria-valuetext": convertHsvaTo("rgba", value),
      tabIndex: focusable ? 0 : -1,
      onKeyDown: handleKeyDown
    }),
    /* @__PURE__ */ React.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` }
      }))
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: { backgroundImage: "linear-gradient(90deg, #fff, transparent)" }
      }))
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: { backgroundImage: "linear-gradient(0deg, #000, transparent)" }
      }))
    ),
    /* @__PURE__ */ React.createElement(
      Thumb,
      __spreadValues({
        position,
        size
      }, getStyles("thumb", { style: { backgroundColor: color } }))
    )
  );
}
Saturation.displayName = "@mantine/core/Saturation";

export { Saturation };
//# sourceMappingURL=Saturation.js.map
