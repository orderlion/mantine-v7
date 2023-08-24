'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Radio, { checked: true, disabled: true, label: "React", value: "react" }), /* @__PURE__ */ React__default.createElement(core.Radio, { disabled: true, label: "Angular", value: "nu" }), /* @__PURE__ */ React__default.createElement(core.Radio, { disabled: true, label: "Svelte", value: "sv" }));
}
const disabled = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=Radio.demo.disabled.js.map
