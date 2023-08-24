import React from 'react';
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

const code = `
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase<any>
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    InputBase,
    {
      label: "Your phone",
      component: IMaskInput,
      mask: "+7 (000) 000-0000",
      placeholder: "Your phone"
    }
  ), /* @__PURE__ */ React.createElement(InputBase, { label: "Custom native select", component: "select", mt: "md" }, /* @__PURE__ */ React.createElement("option", { value: "react" }, "React"), /* @__PURE__ */ React.createElement("option", { value: "react" }, "Angular"), /* @__PURE__ */ React.createElement("option", { value: "svelte" }, "Svelte")));
}
const inputBase = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { inputBase };
//# sourceMappingURL=Input.demo.inputBase.js.map
