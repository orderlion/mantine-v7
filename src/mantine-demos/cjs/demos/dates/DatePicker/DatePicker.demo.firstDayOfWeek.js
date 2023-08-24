'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, { firstDayOfWeek: 0 }), /* @__PURE__ */ React__default.createElement(dates.DatePicker, { firstDayOfWeek: 6 }));
}
const firstDayOfWeek = {
  type: "code",
  component: Demo,
  code
};

exports.firstDayOfWeek = firstDayOfWeek;
//# sourceMappingURL=DatePicker.demo.firstDayOfWeek.js.map
