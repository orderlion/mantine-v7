'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var stylesApi$1 = require('@mantine/styles-api');

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
import { Combobox, TextInput, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({ opened: true });

  return (
    <Combobox store={combobox}{{props}}>
      <Combobox.Target>
        <TextInput placeholder="Pick value" />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Header>Combobox header</Combobox.Header>
        <Combobox.Search placeholder="Search input" />

        <Combobox.Options>
          <Combobox.Group label="First group">
            <Combobox.Option value="1">First</Combobox.Option>
            <Combobox.Option value="2">Second</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Second group">
            <Combobox.Option value="3">Third</Combobox.Option>
            <Combobox.Option value="4">Fourth</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Third group">
            <Combobox.Empty>Nothing found in this group...</Combobox.Empty>
          </Combobox.Group>
        </Combobox.Options>

        <Combobox.Footer>Combobox footer</Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`;
function Demo(props) {
  const combobox = core.useCombobox({
    opened: true
  });
  return /* @__PURE__ */ React__default.createElement(core.Combobox, __spreadValues({ store: combobox }, props), /* @__PURE__ */ React__default.createElement(core.Combobox.Target, null, /* @__PURE__ */ React__default.createElement(core.TextInput, { placeholder: "Pick value" })), /* @__PURE__ */ React__default.createElement(core.Combobox.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Header, null, "Combobox header"), /* @__PURE__ */ React__default.createElement(core.Combobox.Search, { placeholder: "Search input" }), /* @__PURE__ */ React__default.createElement(core.Combobox.Options, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Group, { label: "First group" }, /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "1" }, "First"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "2" }, "Second")), /* @__PURE__ */ React__default.createElement(core.Combobox.Group, { label: "Second group" }, /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "3" }, "Third"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "4" }, "Fourth")), /* @__PURE__ */ React__default.createElement(core.Combobox.Group, { label: "Third group" }, /* @__PURE__ */ React__default.createElement(core.Combobox.Empty, null, "Nothing found in this group..."))), /* @__PURE__ */ React__default.createElement(core.Combobox.Footer, null, "Combobox footer")));
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.ComboboxStylesApi,
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Combobox.demo.stylesApi.js.map
