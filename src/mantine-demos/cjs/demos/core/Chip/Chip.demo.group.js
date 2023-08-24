'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group justify="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group justify="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Chip.Group, null, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Chip, { value: "1" }, "Single chip"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "2" }, "Can be selected"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "3" }, "At a time"))), /* @__PURE__ */ React__default.createElement(core.Chip.Group, { multiple: true }, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Chip, { value: "1" }, "Multiple chips"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "2" }, "Can be selected"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "3" }, "At a time"))));
}
const group = {
  type: "code",
  component: Demo,
  code
};

exports.group = group;
//# sourceMappingURL=Chip.demo.group.js.map
