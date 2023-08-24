'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;
function Demo() {
  const colorScheme = hooks.useColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.Badge, { color: colorScheme === "dark" ? "blue" : "teal", variant: "filled" }, "Your system color scheme is ", colorScheme);
}
const useColorSchemeDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useColorSchemeDemo = useColorSchemeDemo;
//# sourceMappingURL=use-color-scheme.demo.usage.js.map
