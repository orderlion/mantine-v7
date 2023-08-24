import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DatePicker, { weekendDays: [1, 2] });
}
const weekendDays = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { weekendDays };
//# sourceMappingURL=DatePicker.demo.weekendDays.js.map
