'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
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
const code = `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Radio.Group, __spreadValues({ defaultValue: "react", name: "favoriteFramework" }, props), /* @__PURE__ */ React__default.createElement(core.Group, { mt: "xs" }, /* @__PURE__ */ React__default.createElement(core.Radio, { value: "react", label: "React" }), /* @__PURE__ */ React__default.createElement(core.Radio, { value: "svelte", label: "Svelte" }), /* @__PURE__ */ React__default.createElement(core.Radio, { value: "ng", label: "Angular" }), /* @__PURE__ */ React__default.createElement(core.Radio, { value: "vue", label: "Vue" })));
}
const groupConfigurator = {
  type: "configurator",
  component: Wrapper,
  centered: true,
  code,
  controls: [
    {
      prop: "label",
      type: "string",
      initialValue: "Select your favorite framework/library",
      libraryValue: ""
    },
    { prop: "description", type: "string", initialValue: "This is anonymous", libraryValue: "" },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    { prop: "withAsterisk", type: "boolean", initialValue: true, libraryValue: false }
  ]
};

exports.groupConfigurator = groupConfigurator;
//# sourceMappingURL=Radio.demo.groupConfigurator.js.map
