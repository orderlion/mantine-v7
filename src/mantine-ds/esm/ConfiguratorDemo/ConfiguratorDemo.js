import React, { useState } from 'react';
import { Stack } from '@mantine/core';
import { injectProps } from './inject-props.js';
import { clearProps } from './clear-props.js';
import classes from './ConfiguratorDemo.module.css.js';
import { DemoRoot } from '../DemoRoot/DemoRoot.js';
import { DemoColumns } from '../DemoColumns/DemoColumns.js';
import { DemoCode } from '../DemoCode/DemoCode.js';
import { ConfiguratorBooleanControl } from './controls/ConfiguratorBoolean.control.js';
import { ConfiguratorSegmentedControl } from './controls/ConfiguratorSegmented.control.js';
import { ConfiguratorColorControl } from './controls/ConfiguratorColor.control.js';
import { ConfiguratorStringControl } from './controls/ConfiguratorString.control.js';
import { ConfiguratorSelectControl } from './controls/ConfiguratorSelect.control.js';
import { ConfiguratorSizeControl } from './controls/ConfiguratorSize.control.js';
import { ConfiguratorNumberControl } from './controls/ConfiguratorNumber.control.js';

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
const ControlComponents = {
  boolean: ConfiguratorBooleanControl,
  segmented: ConfiguratorSegmentedControl,
  color: ConfiguratorColorControl,
  string: ConfiguratorStringControl,
  select: ConfiguratorSelectControl,
  size: ConfiguratorSizeControl,
  number: ConfiguratorNumberControl
};
function ConfiguratorDemo({
  code,
  controls,
  children,
  centered,
  maxWidth,
  minHeight,
  withPadding,
  dimmed,
  striped
}) {
  const initialState = controls.reduce((acc, control) => {
    acc[control.prop] = control.initialValue;
    return acc;
  }, {});
  const [state, setState] = useState(initialState);
  const setStateField = (field, value) => setState((current) => __spreadProps(__spreadValues({}, current), { [field]: value }));
  const items = controls.map((control) => {
    const ControlComponent = ControlComponents[control.type];
    const _a = control, rest = __objRest(_a, ["initialValue", "libraryValue"]);
    return /* @__PURE__ */ React.createElement(
      ControlComponent,
      __spreadValues({
        key: control.prop,
        value: state[control.prop],
        onChange: (value) => setStateField(control.prop, value)
      }, rest)
    );
  });
  return /* @__PURE__ */ React.createElement(DemoRoot, null, /* @__PURE__ */ React.createElement(
    DemoColumns,
    {
      controls: /* @__PURE__ */ React.createElement(Stack, { className: classes.controls, gap: "sm" }, items),
      centered,
      withPadding,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    React.cloneElement(children, state)
  ), /* @__PURE__ */ React.createElement(
    DemoCode,
    {
      code: [
        {
          fileName: "Demo.tsx",
          language: "tsx",
          code: typeof code === "function" ? code(clearProps(controls, state)) : injectProps(clearProps(controls, state), code)
        }
      ]
    }
  ));
}

export { ConfiguratorDemo };
//# sourceMappingURL=ConfiguratorDemo.js.map
