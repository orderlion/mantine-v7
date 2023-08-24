'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');
var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

const code = `
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';

function getDay(date: Date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - getDay(date) - 1);
}

function endOfWeek(date: Date) {
  return dayjs(new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - getDay(date))))
    .endOf('date')
    .toDate();
}

function isInWeekRange(date: Date, value: Date | null) {
  return value
    ? dayjs(date).isBefore(endOfWeek(value)) && dayjs(date).isAfter(startOfWeek(value))
    : false;
}

function Demo() {
  const [hovered, setHovered] = useState<Date | null>(null);
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Calendar
      withCellSpacing={false}
      getDayProps={(date) => {
        const isHovered = isInWeekRange(date, hovered);
        const isSelected = isInWeekRange(date, value);
        const isInRange = isHovered || isSelected;
        return {
          onMouseEnter: () => setHovered(date),
          onMouseLeave: () => setHovered(null),
          inRange: isInRange,
          firstInRange: isInRange && date.getDay() === 1,
          lastInRange: isInRange && date.getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date),
        };
      }}
    />
  );
}
`;
function getDay(date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}
function startOfWeek(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - getDay(date) - 1);
}
function endOfWeek(date) {
  return dayjs__default(new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - getDay(date)))).endOf("date").toDate();
}
function isInWeekRange(date, value) {
  return value ? dayjs__default(date).isBefore(endOfWeek(value)) && dayjs__default(date).isAfter(startOfWeek(value)) : false;
}
function Demo() {
  const [hovered, setHovered] = React.useState(null);
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(
    dates.Calendar,
    {
      withCellSpacing: false,
      getDayProps: (date) => {
        const isHovered = isInWeekRange(date, hovered);
        const isSelected = isInWeekRange(date, value);
        const isInRange = isHovered || isSelected;
        return {
          onMouseEnter: () => setHovered(date),
          onMouseLeave: () => setHovered(null),
          inRange: isInRange,
          firstInRange: isInRange && date.getDay() === 1,
          lastInRange: isInRange && date.getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date)
        };
      }
    }
  );
}
const weekPicker = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.weekPicker = weekPicker;
//# sourceMappingURL=Calendar.demo.weekPicker.js.map
