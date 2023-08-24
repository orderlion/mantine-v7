'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var variantsData = require('../../../shared/variants-data.js');

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
const code = `
import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Alert{{props}} icon={icon}>
      {{children}}
    </Alert>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Alert, __spreadValues({ icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconInfoCircle, null) }, props));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  striped: true,
  maxWidth: 400,
  controls: [
    __spreadProps(__spreadValues({}, variantsData.staticVariantsControl), { initialValue: "light" }),
    { type: "color", prop: "color", initialValue: "blue", libraryValue: null },
    { type: "size", prop: "radius", initialValue: "sm", libraryValue: "sm" },
    { type: "boolean", prop: "withCloseButton", initialValue: false, libraryValue: false },
    { type: "string", prop: "title", initialValue: "Alert title", libraryValue: null },
    {
      type: "string",
      prop: "children",
      initialValue: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.",
      libraryValue: null
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Alert.demo.configurator.js.map
