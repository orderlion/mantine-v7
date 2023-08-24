'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, Text, Box } from '@mantine/core';
import { useValidatedState } from '@mantine/hooks';

function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    '',
    (val) => /^\\S+@\\S+$/.test(val),
    true
  );

  return (
    <Box maw={320} mx="auto" style={{ overflowWrap: 'break-word' }}>
      <TextInput
        value={value}
        onChange={(event) => setEmail(event.currentTarget.value)}
        withAsterisk
        error={!valid}
        placeholder="email@example.com"
        label="Your email"
      />

      <Text size="sm" mt="md">
        <Text inherit c="dimmed" component="span">
          Current value:
        </Text>{' '}
        {value || '[empty string]'}
      </Text>

      <Text size="sm">
        <Text inherit c="dimmed" component="span">
          Last valid value:
        </Text>{' '}
        {lastValidValue || '[empty string]'}
      </Text>
    </Box>
  );
}
`;
function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = hooks.useValidatedState(
    "",
    (val) => /^\S+@\S+$/.test(val),
    true
  );
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 320, mx: "auto", style: { overflowWrap: "break-word" } }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      value,
      onChange: (event) => setEmail(event.currentTarget.value),
      withAsterisk: true,
      error: !valid,
      placeholder: "email@example.com",
      label: "Your email"
    }
  ), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Text, { inherit: true, c: "dimmed", component: "span" }, "Current value:"), " ", value || "[empty string]"), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, /* @__PURE__ */ React__default.createElement(core.Text, { inherit: true, c: "dimmed", component: "span" }, "Last valid value:"), " ", lastValidValue || "[empty string]"));
}
const useValidatedStateDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useValidatedStateDemo = useValidatedStateDemo;
//# sourceMappingURL=use-validated-state.demo.usage.js.map
