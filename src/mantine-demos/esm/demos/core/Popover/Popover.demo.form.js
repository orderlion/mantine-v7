import React from 'react';
import { Popover, Button, TextInput } from '@mantine/core';

const code = `
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Popover, { width: 300, trapFocus: true, position: "bottom", withArrow: true, shadow: "md" }, /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Toggle popover")), /* @__PURE__ */ React.createElement(Popover.Dropdown, null, /* @__PURE__ */ React.createElement(TextInput, { label: "Name", placeholder: "Name", size: "xs" }), /* @__PURE__ */ React.createElement(TextInput, { label: "Email", placeholder: "john@doe.com", size: "xs", mt: "xs" })));
}
const form = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { form };
//# sourceMappingURL=Popover.demo.form.js.map
