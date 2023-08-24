'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    dates.Calendar,
    {
      static: true,
      renderDay: (date) => {
        const day = date.getDate();
        return /* @__PURE__ */ React__default.createElement(core.Indicator, { size: 6, color: "red", offset: -2, disabled: day !== 16 }, /* @__PURE__ */ React__default.createElement("div", null, day));
      }
    }
  );
}
const isStatic = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.isStatic = isStatic;
//# sourceMappingURL=Calendar.demo.isStatic.js.map
