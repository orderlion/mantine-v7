import React, { forwardRef } from 'react';

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
const RingLoader = forwardRef((_a, ref) => {
  var _b = _a, { style } = _b, others = __objRest(_b, ["style"]);
  return /* @__PURE__ */ React.createElement(
    "svg",
    __spreadProps(__spreadValues({}, others), {
      ref,
      style: __spreadValues({
        width: "var(--loader-size)",
        height: "var(--loader-size)",
        stroke: "var(--loader-color)"
      }, style),
      viewBox: "0 0 45 45",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "#fff"
    }),
    /* @__PURE__ */ React.createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" }, /* @__PURE__ */ React.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" }, /* @__PURE__ */ React.createElement(
      "animate",
      {
        attributeName: "r",
        begin: "1.5s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }
    ), /* @__PURE__ */ React.createElement(
      "animate",
      {
        attributeName: "stroke-opacity",
        begin: "1.5s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }
    ), /* @__PURE__ */ React.createElement(
      "animate",
      {
        attributeName: "stroke-width",
        begin: "1.5s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }
    )), /* @__PURE__ */ React.createElement("circle", { cx: "22", cy: "22", r: "6", strokeOpacity: "0" }, /* @__PURE__ */ React.createElement(
      "animate",
      {
        attributeName: "r",
        begin: "3s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }
    ), /* @__PURE__ */ React.createElement(
      "animate",
      {
        attributeName: "stroke-opacity",
        begin: "3s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }
    ), /* @__PURE__ */ React.createElement(
      "animate",
      {
        attributeName: "stroke-width",
        begin: "3s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }
    )), /* @__PURE__ */ React.createElement("circle", { cx: "22", cy: "22", r: "8" }, /* @__PURE__ */ React.createElement(
      "animate",
      {
        attributeName: "r",
        begin: "0s",
        dur: "1.5s",
        values: "6;1;2;3;4;5;6",
        calcMode: "linear",
        repeatCount: "indefinite"
      }
    )))
  );
});
const ringLoaderCode = `
import { forwardRef } from 'react';
import { MantineLoaderComponent } from '@mantine/core';

const RingLoader: MantineLoaderComponent = forwardRef(({ style, ...others }, ref) => (
  <svg
    {...others}
    ref={ref}
    style={{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)',
      ...style,
    }}
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
));`;

export { RingLoader, ringLoaderCode };
//# sourceMappingURL=_RingLoader.js.map
