import React, { useState } from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useTimeout, randomId } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@mantine/core';
import { randomId, useTimeout } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState("");
  const { start, clear } = useTimeout(() => setValue(randomId()), 1e3);
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { onClick: start }, "Start"), /* @__PURE__ */ React.createElement(Button, { onClick: clear, color: "red" }, "Clear"), /* @__PURE__ */ React.createElement(Text, null, "Random value: ", value));
}
const useTimeoutDemo = {
  type: "code",
  code,
  component: Demo
};

export { useTimeoutDemo };
//# sourceMappingURL=use-timeout.demo.usage.js.map
