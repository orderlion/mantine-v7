'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${props.size}">Regular ${props.size}</Button>
      <Button size="compact-${props.size}">Compact ${props.size}</Button>
    </Group>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { size: props.size }, "Regular ", props.size), /* @__PURE__ */ React__default.createElement(core.Button, { size: `compact-${props.size}` }, "Compact ", props.size));
}
const compact = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: "size", prop: "size", initialValue: "md", libraryValue: "__none__" }]
};

exports.compact = compact;
//# sourceMappingURL=Button.demo.compact.js.map
