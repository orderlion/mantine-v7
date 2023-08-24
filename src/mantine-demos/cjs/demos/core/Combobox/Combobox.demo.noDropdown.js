'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSubmit={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState("");
  return /* @__PURE__ */ React__default.createElement(core.Combobox, { onOptionSubmit: setValue }, /* @__PURE__ */ React__default.createElement(core.Combobox.EventsTarget, null, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      placeholder: "Pick value",
      value,
      onChange: (event) => setValue(event.currentTarget.value)
    }
  )), /* @__PURE__ */ React__default.createElement(core.Combobox.Options, { mt: "sm" }, /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "First" }, "First"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "Second" }, "Second"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "Third" }, "Third")));
}
const noDropdown = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
  defaultExpanded: false
};

exports.noDropdown = noDropdown;
//# sourceMappingURL=Combobox.demo.noDropdown.js.map
