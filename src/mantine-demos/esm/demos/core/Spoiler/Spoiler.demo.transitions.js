import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" transitionDuration={0}>
      {/* Content here */}
    </Spoiler>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, { transitionDuration: 0 });
}
const transitions = {
  type: "code",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=Spoiler.demo.transitions.js.map
