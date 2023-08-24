import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
  if (date.getDay() === 5 && date.getDate() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
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
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2021, 7)}
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`;
const getDayProps = (date) => {
  if (date.getDay() === 5 && date.getDate() === 13) {
    return {
      style: {
        backgroundColor: "var(--mantine-color-red-filled)",
        color: "var(--mantine-color-white)"
      }
    };
  }
  return {};
};
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
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(
    DatePicker,
    {
      value,
      onChange: setValue,
      defaultDate: new Date(2021, 7),
      getDayProps,
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

export { controlProps };
//# sourceMappingURL=DatePicker.demo.controlProps.js.map
