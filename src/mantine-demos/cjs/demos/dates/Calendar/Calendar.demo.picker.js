'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
  );
}
`;
function Demo() {
  const [selected, setSelected] = React.useState([]);
  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs__default(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs__default(d).isSame(date, "date")));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };
  return /* @__PURE__ */ React__default.createElement(
    dates.Calendar,
    {
      getDayProps: (date) => ({
        selected: selected.some((s) => dayjs__default(date).isSame(s, "date")),
        onClick: () => handleSelect(date)
      })
    }
  );
}
const picker = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.picker = picker;
//# sourceMappingURL=Calendar.demo.picker.js.map
