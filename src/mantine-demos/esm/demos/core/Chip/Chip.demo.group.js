import React from 'react';
import { Chip, Group } from '@mantine/core';

const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group justify="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group justify="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Chip.Group, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Chip, { value: "1" }, "Single chip"), /* @__PURE__ */ React.createElement(Chip, { value: "2" }, "Can be selected"), /* @__PURE__ */ React.createElement(Chip, { value: "3" }, "At a time"))), /* @__PURE__ */ React.createElement(Chip.Group, { multiple: true }, /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React.createElement(Chip, { value: "1" }, "Multiple chips"), /* @__PURE__ */ React.createElement(Chip, { value: "2" }, "Can be selected"), /* @__PURE__ */ React.createElement(Chip, { value: "3" }, "At a time"))));
}
const group = {
  type: "code",
  component: Demo,
  code
};

export { group };
//# sourceMappingURL=Chip.demo.group.js.map
