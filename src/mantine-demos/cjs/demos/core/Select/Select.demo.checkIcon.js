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
const code = `
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.Select,
    __spreadProps(__spreadValues({}, props), {
      data: ["React", "Angular", "Svelte", "Vue"],
      dropdownOpened: true,
      pb: 150,
      label: "Control check icon",
      placeholder: "Pick value",
      defaultValue: "React"
    })
  );
}
const checkIcon = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: [
    { type: "boolean", prop: "withCheckIcon", initialValue: true, libraryValue: true },
    {
      type: "segmented",
      prop: "checkIconPosition",
      initialValue: "left",
      libraryValue: null,
      data: ["left", "right"]
    }
  ]
};

exports.checkIcon = checkIcon;
//# sourceMappingURL=Select.demo.checkIcon.js.map
