'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Tooltip for disabled button" }, /* @__PURE__ */ React__default.createElement(core.Button, { "data-disabled": true, onClick: (event) => event.preventDefault() }, "Disabled button with tooltip"));
}
const disabledTooltip = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.disabledTooltip = disabledTooltip;
//# sourceMappingURL=Button.demo.disabledTooltip.js.map
