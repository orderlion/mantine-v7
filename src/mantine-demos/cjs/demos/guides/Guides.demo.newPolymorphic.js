'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

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
const code = `
import { forwardRef } from 'react';
import { Box, BoxProps, createPolymorphicComponent, Group } from '@mantine/core';

interface MyButtonProps extends BoxProps {
  label: string;
}

const MyButton = createPolymorphicComponent<'button', MyButtonProps>(
  forwardRef<HTMLButtonElement, MyButtonProps>(({ label, ...others }, ref) => (
    <Box component="button" {...others} ref={ref}>
      {label}
    </Box>
  ))
);

function Demo() {
  return (
    <Group>
      <MyButton label="Button by default" />
      <MyButton
        label="MyButton as anchor"
        component="a"
        href="https://mantine.dev"
        target="_blank"
      />
    </Group>
  );
}
`;
const MyButton = core.createPolymorphicComponent(
  React.forwardRef((_a, ref) => {
    var _b = _a, { label } = _b, others = __objRest(_b, ["label"]);
    return /* @__PURE__ */ React__default.createElement(core.Box, __spreadProps(__spreadValues({ component: "button" }, others), { ref }), label);
  })
);
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(MyButton, { label: "Button by default" }), /* @__PURE__ */ React__default.createElement(
    MyButton,
    {
      label: "MyButton as anchor",
      component: "a",
      href: "https://mantine.dev",
      target: "_blank"
    }
  ));
}
const newPolymorphic = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.newPolymorphic = newPolymorphic;
//# sourceMappingURL=Guides.demo.newPolymorphic.js.map
