'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Progress.Root, { size: "xl" }, /* @__PURE__ */ React__default.createElement(core.Progress.Section, { value: 35, color: "cyan" }, /* @__PURE__ */ React__default.createElement(core.Progress.Label, null, "Documents")), /* @__PURE__ */ React__default.createElement(core.Progress.Section, { value: 28, color: "pink" }, /* @__PURE__ */ React__default.createElement(core.Progress.Label, null, "Photos")), /* @__PURE__ */ React__default.createElement(core.Progress.Section, { value: 15, color: "orange" }, /* @__PURE__ */ React__default.createElement(core.Progress.Label, null, "Other")));
}
const compound = {
  type: "code",
  component: Demo,
  code
};

exports.compound = compound;
//# sourceMappingURL=Progress.demo.compound.js.map
