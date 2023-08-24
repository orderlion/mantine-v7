'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var dates = require('@mantine/dates');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { rem } from '@mantine/core';

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    dates.TimeInput,
    {
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconClock, { style: { width: core.rem(16), height: core.rem(16) }, stroke: 1.5 })
    }
  );
}
const icon = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code
};

exports.icon = icon;
//# sourceMappingURL=TimeInput.demo.icon.js.map
