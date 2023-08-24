'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;
function Demo() {
  const [value, toggle] = hooks.useToggle(["blue", "orange", "cyan", "teal"]);
  return /* @__PURE__ */ React__default.createElement(core.Button, { color: value, onClick: () => toggle() }, hooks.upperFirst(value));
}
const useToggleDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useToggleDemo = useToggleDemo;
//# sourceMappingURL=use-toggle.demo.usage.js.map
