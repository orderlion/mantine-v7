import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DatePicker, { hideWeekdays: true });
}
const hideWeekdays = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { hideWeekdays };
//# sourceMappingURL=DatePicker.demo.hideWeekdays.js.map
