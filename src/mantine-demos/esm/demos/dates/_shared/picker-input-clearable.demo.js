import React from 'react';

const getCode = (name) => `
import { ${name} } from '@mantine/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;
function getDemo(Component) {
  return () => /* @__PURE__ */ React.createElement(Component, { clearable: true, defaultValue: /* @__PURE__ */ new Date(), label: "Pick date", placeholder: "Pick date" });
}
function getPickerInputClearableDemo(Component) {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerInputClearableDemo };
//# sourceMappingURL=picker-input-clearable.demo.js.map
