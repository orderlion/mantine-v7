import React from 'react';
import { Stack, Checkbox } from '@mantine/core';

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stack, null, /* @__PURE__ */ React.createElement(Checkbox, { checked: false, label: "Default checkbox" }), /* @__PURE__ */ React.createElement(Checkbox, { checked: false, indeterminate: true, label: "Indeterminate checkbox" }), /* @__PURE__ */ React.createElement(Checkbox, { checked: true, indeterminate: true, label: "Indeterminate checked checkbox" }), /* @__PURE__ */ React.createElement(Checkbox, { checked: true, label: "Checked checkbox" }), /* @__PURE__ */ React.createElement(Checkbox, { disabled: true, label: "Disabled checkbox" }), /* @__PURE__ */ React.createElement(Checkbox, { disabled: true, checked: true, label: "Disabled checked checkbox" }), /* @__PURE__ */ React.createElement(Checkbox, { disabled: true, indeterminate: true, label: "Disabled indeterminate checkbox" }));
}
const states = {
  type: "code",
  component: Demo,
  code
};

export { states };
//# sourceMappingURL=Checkbox.demo.states.js.map
