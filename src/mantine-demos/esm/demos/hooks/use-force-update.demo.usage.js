import React from 'react';
import { Group, Text, Button } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

const code = `
import { Button, Text, Group } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;
function Demo() {
  const forceUpdate = useForceUpdate();
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Text, null, randomId()), /* @__PURE__ */ React.createElement(Button, { onClick: forceUpdate }, "Force update"));
}
const useForceUpdateDemo = {
  type: "code",
  code,
  component: Demo
};

export { useForceUpdateDemo };
//# sourceMappingURL=use-force-update.demo.usage.js.map
