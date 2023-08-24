'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { MonthPicker, MonthPickerProps } from '@mantine/dates';

const getYearControlProps: MonthPickerProps['getYearControlProps'] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: MonthPickerProps['getMonthControlProps'] = (date) => {
  if (date.getMonth() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getMonth() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`;
const getYearControlProps = (date) => {
  if (date.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear()) {
    return {
      style: {
        color: "var(--mantine-color-blue-filled)",
        fontWeight: 700
      }
    };
  }
  if (date.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() + 1) {
    return { disabled: true };
  }
  return {};
};
const getMonthControlProps = (date) => {
  if (date.getMonth() === 1) {
    return {
      style: {
        color: "var(--mantine-color-blue-filled)",
        fontWeight: 700
      }
    };
  }
  if (date.getMonth() === 5) {
    return { disabled: true };
  }
  return {};
};
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(
    dates.MonthPicker,
    {
      value,
      onChange: setValue,
      getYearControlProps,
      getMonthControlProps
    }
  );
}
const controlProps = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.controlProps = controlProps;
//# sourceMappingURL=MonthPicker.demo.controlProps.js.map
