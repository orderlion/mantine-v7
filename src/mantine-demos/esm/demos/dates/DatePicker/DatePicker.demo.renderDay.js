import React from 'react';
import { Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = date.getDate();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}

`;
const dayRenderer = (date) => {
  const day = date.getDate();
  return /* @__PURE__ */ React.createElement(Indicator, { size: 6, color: "red", offset: -5, disabled: day !== 16 }, /* @__PURE__ */ React.createElement("div", null, day));
};
function Demo() {
  return /* @__PURE__ */ React.createElement(DatePicker, { renderDay: dayRenderer });
}
const renderDay = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { renderDay };
//# sourceMappingURL=DatePicker.demo.renderDay.js.map
