import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(DatePicker, { maxLevel: "year" }), /* @__PURE__ */ React.createElement(DatePicker, { maxLevel: "month" }));
}
const maxLevel = {
  type: "code",
  component: Demo,
  code
};

export { maxLevel };
//# sourceMappingURL=DatePicker.demo.maxLevel.js.map
