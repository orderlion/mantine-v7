import React, { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

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
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(
    MonthPicker,
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

export { controlProps };
//# sourceMappingURL=MonthPicker.demo.controlProps.js.map
