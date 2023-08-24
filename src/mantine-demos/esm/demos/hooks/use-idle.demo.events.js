import React from 'react';
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

const eventsCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;
function Demo() {
  const idle = useIdle(2e3, { events: ["click", "touchstart"] });
  return /* @__PURE__ */ React.createElement(Badge, { color: idle ? "blue" : "teal" }, "Current state: ", idle ? "idle" : "not idle");
}
const useIdleEvents = {
  type: "code",
  code: eventsCode,
  component: Demo,
  centered: true
};

export { useIdleEvents };
//# sourceMappingURL=use-idle.demo.events.js.map
