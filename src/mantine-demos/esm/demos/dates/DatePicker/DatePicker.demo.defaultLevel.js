import React from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(DatePicker, { defaultLevel: "decade" }), /* @__PURE__ */ React.createElement(DatePicker, { defaultLevel: "year" }));
}
const defaultLevel = {
  type: "code",
  component: Demo,
  code
};

export { defaultLevel };
//# sourceMappingURL=DatePicker.demo.defaultLevel.js.map
