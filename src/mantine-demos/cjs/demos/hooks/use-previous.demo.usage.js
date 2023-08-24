'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, Text } from '@mantine/core';
import { usePrevious, useInputState } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`;
function Demo() {
  const [value, setValue] = hooks.useInputState("");
  const previousValue = hooks.usePrevious(value);
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "Enter some text here",
      placeholder: "Enter some text here",
      id: "previous-demo-input",
      value,
      onChange: setValue
    }
  ), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "md" }, "Current value: ", value), /* @__PURE__ */ React__default.createElement(core.Text, null, "Previous value: ", previousValue));
}
const usePreviousUsage = {
  type: "code",
  component: Demo,
  code
};

exports.usePreviousUsage = usePreviousUsage;
//# sourceMappingURL=use-previous.demo.usage.js.map
