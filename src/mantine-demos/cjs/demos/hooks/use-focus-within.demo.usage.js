'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useFocusWithin } from '@mantine/hooks';
import { TextInput, Button, Box, Text } from '@mantine/core';

function Demo() {
  const { ref, focused } = useFocusWithin();

  return (
    <div ref={ref}>
      <Box
        p="xl"
        style={{
          backgroundColor: focused ? 'var(--mantine-color-blue-light)' : 'transparent',
        }}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}
`;
function Demo() {
  const { ref, focused } = hooks.useFocusWithin();
  return /* @__PURE__ */ React__default.createElement("div", { ref }, /* @__PURE__ */ React__default.createElement(
    core.Box,
    {
      p: "xl",
      style: {
        backgroundColor: focused ? "var(--mantine-color-blue-light)" : "transparent"
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "One of elements has focus: ", focused.toString()),
    /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Focus this input", placeholder: "Styles will be added to parent" }),
    /* @__PURE__ */ React__default.createElement(core.Button, { mt: "md" }, "Button")
  ));
}
const useFocusWithinDemo = {
  type: "code",
  component: Demo,
  code
};

exports.useFocusWithinDemo = useFocusWithinDemo;
//# sourceMappingURL=use-focus-within.demo.usage.js.map
