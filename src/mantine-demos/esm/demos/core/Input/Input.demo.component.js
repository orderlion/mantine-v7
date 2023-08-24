import React from 'react';
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const code = `
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, { component: "button", pointer: true }, "Button input"), /* @__PURE__ */ React.createElement(
    Input,
    {
      component: "select",
      rightSection: /* @__PURE__ */ React.createElement(IconChevronDown, { size: 14, stroke: 1.5 }),
      pointer: true,
      mt: "md"
    },
    /* @__PURE__ */ React.createElement("option", { value: "1" }, "1"),
    /* @__PURE__ */ React.createElement("option", { value: "2" }, "2")
  ));
}
const component = {
  type: "code",
  component: Demo,
  code
};

export { component };
//# sourceMappingURL=Input.demo.component.js.map
