'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
`;
function Demo() {
  const pills = Array(10).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement(core.Pill, { key: index, withRemoveButton: true }, "Item ", index));
  return /* @__PURE__ */ React__default.createElement(core.InputBase, { component: "div", multiline: true }, /* @__PURE__ */ React__default.createElement(core.Pill.Group, null, pills));
}
const withinInput = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.withinInput = withinInput;
//# sourceMappingURL=Pill.demo.withinInput.js.map
