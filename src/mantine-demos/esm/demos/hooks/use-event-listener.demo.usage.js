import React, { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

const code = `
import { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
`;
function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener("click", increment);
  return /* @__PURE__ */ React.createElement(Button, { ref }, "Button clicks: ", count);
}
const useEventListenerDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { useEventListenerDemo };
//# sourceMappingURL=use-event-listener.demo.usage.js.map
