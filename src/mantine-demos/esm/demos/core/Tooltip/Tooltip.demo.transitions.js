import React from 'react';
import { keys, MANTINE_TRANSITIONS, Tooltip, Badge, Group } from '@mantine/core';

function Demo() {
  const transitions2 = keys(MANTINE_TRANSITIONS).map((transition) => /* @__PURE__ */ React.createElement(Tooltip, { key: transition, label: transition, transitionProps: { transition, duration: 300 } }, /* @__PURE__ */ React.createElement(Badge, { variant: "light" }, transition)));
  return /* @__PURE__ */ React.createElement(Group, { justify: "center", style: { cursor: "default" } }, transitions2);
}
const transitions = {
  type: "code",
  component: Demo
};

export { Demo, transitions };
//# sourceMappingURL=Tooltip.demo.transitions.js.map
