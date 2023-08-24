import React from 'react';
import { useCombobox, Combobox, TextInput } from '@mantine/core';
import { ComboboxStylesApi } from '@mantine/styles-api';

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
  const combobox = useCombobox({
    opened: true
  });
  return /* @__PURE__ */ React.createElement(Combobox, __spreadValues({ store: combobox }, props), /* @__PURE__ */ React.createElement(Combobox.Target, null, /* @__PURE__ */ React.createElement(TextInput, { placeholder: "Pick value" })), /* @__PURE__ */ React.createElement(Combobox.Dropdown, null, /* @__PURE__ */ React.createElement(Combobox.Header, null, "Combobox header"), /* @__PURE__ */ React.createElement(Combobox.Search, { placeholder: "Search input" }), /* @__PURE__ */ React.createElement(Combobox.Options, null, /* @__PURE__ */ React.createElement(Combobox.Group, { label: "First group" }, /* @__PURE__ */ React.createElement(Combobox.Option, { value: "1" }, "First"), /* @__PURE__ */ React.createElement(Combobox.Option, { value: "2" }, "Second")), /* @__PURE__ */ React.createElement(Combobox.Group, { label: "Second group" }, /* @__PURE__ */ React.createElement(Combobox.Option, { value: "3" }, "Third"), /* @__PURE__ */ React.createElement(Combobox.Option, { value: "4" }, "Fourth")), /* @__PURE__ */ React.createElement(Combobox.Group, { label: "Third group" }, /* @__PURE__ */ React.createElement(Combobox.Empty, null, "Nothing found in this group..."))), /* @__PURE__ */ React.createElement(Combobox.Footer, null, "Combobox footer")));
}
const stylesApi = {
  type: "styles-api",
  data: ComboboxStylesApi,
  component: Demo,
  code
};

export { stylesApi };
//# sourceMappingURL=Combobox.demo.stylesApi.js.map
