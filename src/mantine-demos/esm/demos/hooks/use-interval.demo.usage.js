import React, { useState, useEffect } from 'react';
import { Stack, Text, Button } from '@mantine/core';
import { useInterval } from '@mantine/hooks';

const code = `
import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { Stack, Button, Text } from '@mantine/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? 'red' : 'teal'}
        variant="outline"
      >
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
`;
function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1e3);
  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);
  return /* @__PURE__ */ React.createElement(Stack, { align: "center" }, /* @__PURE__ */ React.createElement(Text, null, "Page loaded ", /* @__PURE__ */ React.createElement("b", null, seconds), " seconds ago"), /* @__PURE__ */ React.createElement(Button, { onClick: interval.toggle, color: interval.active ? "red" : "teal", variant: "outline" }, interval.active ? "Stop" : "Start", " counting"));
}
const useIntervalDemo = {
  type: "code",
  code,
  component: Demo
};

export { useIntervalDemo };
//# sourceMappingURL=use-interval.demo.usage.js.map
