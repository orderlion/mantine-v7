'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="top" position="top" closeDelay={1500}>
      <Tooltip label="bottom" position="bottom" openDelay={500} closeDelay={1000}>
        <Tooltip label="left" position="left" openDelay={1000} closeDelay={500}>
          <Tooltip label="right" position="right" openDelay={1500}>
            <Button variant="outline">Nested Tooltips</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "top", position: "top", closeDelay: 1500 }, /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "bottom", position: "bottom", openDelay: 500, closeDelay: 1e3 }, /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "left", position: "left", openDelay: 1e3, closeDelay: 500 }, /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "right", position: "right", openDelay: 1500 }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline" }, "Nested Tooltips")))));
}
const nested = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.nested = nested;
//# sourceMappingURL=Tooltip.demo.nested.js.map
