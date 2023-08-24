'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDebouncedState } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useDebouncedState('', 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}
`;
function Demo() {
  const [value, setValue] = hooks.useDebouncedState("", 200);
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "Enter value to see debounce effect",
      placeholder: "Enter value to see debounce effect",
      defaultValue: value,
      onChange: (event) => setValue(event.currentTarget.value)
    }
  ), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "sm" }, /* @__PURE__ */ React__default.createElement(core.Text, { component: "span", c: "dimmed", size: "sm" }, "Debounced value:"), " ", value.trim() || "[empty string]"));
}
const useDebouncedStateUsage = {
  type: "code",
  component: Demo,
  code
};

exports.useDebouncedStateUsage = useDebouncedStateUsage;
//# sourceMappingURL=use-debounced-state.demo.usage.js.map
