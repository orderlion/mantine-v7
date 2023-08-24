'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState("");
  const [debounced] = hooks.useDebouncedValue(value, 200, { leading: true });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "Enter value to see debounce effect",
      placeholder: "Enter value to see debounce effect",
      value,
      onChange: (event) => setValue(event.currentTarget.value)
    }
  ), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "sm" }, /* @__PURE__ */ React__default.createElement(core.Text, { component: "span", c: "dimmed", size: "sm" }, "Value:"), " ", value.trim() || "[empty string]"), /* @__PURE__ */ React__default.createElement(core.Text, null, /* @__PURE__ */ React__default.createElement(core.Text, { component: "span", c: "dimmed", size: "sm" }, "Debounced value:"), " ", debounced.trim() || "[empty string]"));
}
const useDebouncedValueLeading = {
  type: "code",
  component: Demo,
  code
};

exports.useDebouncedValueLeading = useDebouncedValueLeading;
//# sourceMappingURL=use-debounced-value.demo.leading.js.map
