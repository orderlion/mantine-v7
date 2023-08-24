import React from 'react';
import { Tooltip, Group, Button } from '@mantine/core';

const code = `
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tooltip.Group, { openDelay: 500, closeDelay: 100 }, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Tooltip, { label: "Tooltip 1" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Button 1")), /* @__PURE__ */ React.createElement(Tooltip, { label: "Tooltip 2" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Button 2")), /* @__PURE__ */ React.createElement(Tooltip, { label: "Tooltip 3" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Button 3"))));
}
const group = {
  type: "code",
  component: Demo,
  code
};

export { group };
//# sourceMappingURL=Tooltip.demo.group.js.map
