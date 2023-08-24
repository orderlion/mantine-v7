'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var stylesApi$1 = require('@mantine/styles-api');

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
import { IconAt } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['First', 'Second']}
      data={['React', 'Angular']}
    />
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.MultiSelect,
    __spreadProps(__spreadValues({}, props), {
      dropdownOpened: true,
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconAt, { style: { width: core.rem(18), height: core.rem(18) }, stroke: 1.5 }),
      withAsterisk: true,
      label: "MultiSelect",
      description: "Description",
      placeholder: "MultiSelect",
      defaultValue: ["First", "Second"],
      data: [
        { group: "Frontend", items: ["React", "Angular"] },
        { group: "Backend", items: ["Node", "Django"] }
      ]
    })
  );
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.MultiSelectStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=MultiSelect.demo.stylesApi.js.map
