import React from 'react';
import { Group, Button } from '@mantine/core';

const code = (props) => `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${props.size}">Regular ${props.size}</Button>
      <Button size="compact-${props.size}">Compact ${props.size}</Button>
    </Group>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { size: props.size }, "Regular ", props.size), /* @__PURE__ */ React.createElement(Button, { size: `compact-${props.size}` }, "Compact ", props.size));
}
const compact = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: "size", prop: "size", initialValue: "md", libraryValue: "__none__" }]
};

export { compact };
//# sourceMappingURL=Button.demo.compact.js.map
