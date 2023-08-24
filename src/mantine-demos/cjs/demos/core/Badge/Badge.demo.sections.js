'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge, Group, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`;
function Demo() {
  const icon = /* @__PURE__ */ React__default.createElement(iconsReact.IconAt, { style: { width: core.rem(12), height: core.rem(12) } });
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Badge, { leftSection: icon }, "With left section"), /* @__PURE__ */ React__default.createElement(core.Badge, { rightSection: icon }, "With right section"));
}
const sections = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.sections = sections;
//# sourceMappingURL=Badge.demo.sections.js.map
