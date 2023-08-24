import React from 'react';
import { Text, Group, Button } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { size: "md", ta: "center", py: "xs" }, "Count: ", count), /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "xs", onClick: handlers.increment }, "Increment"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "xs", onClick: handlers.decrement }, "Decrement"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "xs", onClick: handlers.reset }, "Reset"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "xs", onClick: () => handlers.set(5) }, "Set 5")));
}
const useCounterDemo = {
  type: "code",
  code,
  component: Demo
};

export { useCounterDemo };
//# sourceMappingURL=use-counter.demo.usage.js.map
