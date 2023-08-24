import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DatePicker, { monthsListFormat: "MM", yearsListFormat: "YY" });
}
const listFormat = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { listFormat };
//# sourceMappingURL=DatePicker.demo.listFormat.js.map
