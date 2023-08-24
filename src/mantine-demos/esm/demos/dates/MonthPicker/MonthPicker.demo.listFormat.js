import React from 'react';
import { MonthPicker } from '@mantine/dates';

const code = `
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MonthPicker, { monthsListFormat: "MM", yearsListFormat: "YY" });
}
const listFormat = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { listFormat };
//# sourceMappingURL=MonthPicker.demo.listFormat.js.map
