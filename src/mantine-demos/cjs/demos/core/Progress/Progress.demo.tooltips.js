'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents \u2013 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos \u2013 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other \u2013 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Progress.Root, { size: 40 }, /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Documents \u2013 33Gb" }, /* @__PURE__ */ React__default.createElement(core.Progress.Section, { value: 33, color: "cyan" }, /* @__PURE__ */ React__default.createElement(core.Progress.Label, null, "Documents"))), /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Photos \u2013 28Gb" }, /* @__PURE__ */ React__default.createElement(core.Progress.Section, { value: 28, color: "pink" }, /* @__PURE__ */ React__default.createElement(core.Progress.Label, null, "Photos"))), /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Other \u2013 15Gb" }, /* @__PURE__ */ React__default.createElement(core.Progress.Section, { value: 15, color: "orange" }, /* @__PURE__ */ React__default.createElement(core.Progress.Label, null, "Other"))));
}
const tooltips = {
  type: "code",
  component: Demo,
  code
};

exports.tooltips = tooltips;
//# sourceMappingURL=Progress.demo.tooltips.js.map
