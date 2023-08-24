import React from 'react';
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

const initialStateCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;
function Demo() {
  const idle = useIdle(2e3, { initialState: false });
  return /* @__PURE__ */ React.createElement(Badge, { color: idle ? "blue" : "teal" }, "Current state: ", idle ? "idle" : "not idle");
}
const useIdleInitialState = {
  type: "code",
  code: initialStateCode,
  component: Demo,
  centered: true
};

export { useIdleInitialState };
//# sourceMappingURL=use-idle.demo.state.js.map
