'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var injectProps = require('./inject-props.js');
var clearProps = require('./clear-props.js');
var ConfiguratorDemo_module = require('./ConfiguratorDemo.module.css.js');
var DemoRoot = require('../DemoRoot/DemoRoot.js');
var DemoColumns = require('../DemoColumns/DemoColumns.js');
var DemoCode = require('../DemoCode/DemoCode.js');
var ConfiguratorBoolean_control = require('./controls/ConfiguratorBoolean.control.js');
var ConfiguratorSegmented_control = require('./controls/ConfiguratorSegmented.control.js');
var ConfiguratorColor_control = require('./controls/ConfiguratorColor.control.js');
var ConfiguratorString_control = require('./controls/ConfiguratorString.control.js');
var ConfiguratorSelect_control = require('./controls/ConfiguratorSelect.control.js');
var ConfiguratorSize_control = require('./controls/ConfiguratorSize.control.js');
var ConfiguratorNumber_control = require('./controls/ConfiguratorNumber.control.js');

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
const ControlComponents = {
  boolean: ConfiguratorBoolean_control.ConfiguratorBooleanControl,
  segmented: ConfiguratorSegmented_control.ConfiguratorSegmentedControl,
  color: ConfiguratorColor_control.ConfiguratorColorControl,
  string: ConfiguratorString_control.ConfiguratorStringControl,
  select: ConfiguratorSelect_control.ConfiguratorSelectControl,
  size: ConfiguratorSize_control.ConfiguratorSizeControl,
  number: ConfiguratorNumber_control.ConfiguratorNumberControl
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
  const [state, setState] = React.useState(initialState);
  const setStateField = (field, value) => setState((current) => __spreadProps(__spreadValues({}, current), { [field]: value }));
  const items = controls.map((control) => {
    const ControlComponent = ControlComponents[control.type];
    const _a = control, rest = __objRest(_a, ["initialValue", "libraryValue"]);
    return /* @__PURE__ */ React__default.createElement(
      ControlComponent,
      __spreadValues({
        key: control.prop,
        value: state[control.prop],
        onChange: (value) => setStateField(control.prop, value)
      }, rest)
    );
  });
  return /* @__PURE__ */ React__default.createElement(DemoRoot.DemoRoot, null, /* @__PURE__ */ React__default.createElement(
    DemoColumns.DemoColumns,
    {
      controls: /* @__PURE__ */ React__default.createElement(core.Stack, { className: ConfiguratorDemo_module['default'].controls, gap: "sm" }, items),
      centered,
      withPadding,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    React__default.cloneElement(children, state)
  ), /* @__PURE__ */ React__default.createElement(
    DemoCode.DemoCode,
    {
      code: [
        {
          fileName: "Demo.tsx",
          language: "tsx",
          code: typeof code === "function" ? code(clearProps.clearProps(controls, state)) : injectProps.injectProps(clearProps.clearProps(controls, state), code)
        }
      ]
    }
  ));
}

exports.ConfiguratorDemo = ConfiguratorDemo;
//# sourceMappingURL=ConfiguratorDemo.js.map
