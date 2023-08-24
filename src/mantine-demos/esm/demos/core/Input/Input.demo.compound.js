import React from 'react';
import { Input } from '@mantine/core';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input.Label, { required: true }, "Input label"), /* @__PURE__ */ React.createElement(Input.Description, null, "Input description"), /* @__PURE__ */ React.createElement(Input.Error, null, "Input error"));
}
const compound = {
  type: "code",
  component: Demo,
  code
};

export { compound };
//# sourceMappingURL=Input.demo.compound.js.map
