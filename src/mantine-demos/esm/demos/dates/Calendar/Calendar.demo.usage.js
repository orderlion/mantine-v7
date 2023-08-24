import React from 'react';
import { Calendar } from '@mantine/dates';

const code = `
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Calendar, null);
}
const usage = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=Calendar.demo.usage.js.map
