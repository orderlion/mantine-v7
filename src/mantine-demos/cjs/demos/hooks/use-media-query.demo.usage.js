'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${core.em(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;
function Demo() {
  const matches = hooks.useMediaQuery(`(min-width: ${core.em(900)})`);
  return /* @__PURE__ */ React__default.createElement(core.Badge, { color: matches ? "teal" : "red", variant: "filled" }, "Breakpoint ", matches ? "matches" : "does not match");
}
const useMediaQueryDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useMediaQueryDemo = useMediaQueryDemo;
//# sourceMappingURL=use-media-query.demo.usage.js.map
