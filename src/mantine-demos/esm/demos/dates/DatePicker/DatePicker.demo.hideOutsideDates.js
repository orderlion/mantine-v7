import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DatePicker, { hideOutsideDates: true });
}
const hideOutsideDates = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { hideOutsideDates };
//# sourceMappingURL=DatePicker.demo.hideOutsideDates.js.map
