import React from 'react';
import { MonthPicker } from '@mantine/dates';

const code = `
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MonthPicker, { maxLevel: "year" });
}
const maxLevel = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { maxLevel };
//# sourceMappingURL=MonthPicker.demo.maxLevel.js.map
