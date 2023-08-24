import React from 'react';
import { RingProgress } from '@mantine/core';

const code = `
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(RingProgress, { sections: [{ value: 40, color: "yellow" }], rootColor: "red" });
}
const rootColor = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { rootColor };
//# sourceMappingURL=RingProgress.demo.rootColor.js.map
