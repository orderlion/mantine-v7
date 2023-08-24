import React, { useState } from 'react';

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${name}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState([]);
    return /* @__PURE__ */ React.createElement(
      Component,
      {
        type: "multiple",
        label: "Pick dates",
        placeholder: "Pick dates",
        value,
        onChange: setValue
      }
    );
  };
}
function getPickerInputMultipleDemo(Component) {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerInputMultipleDemo };
//# sourceMappingURL=picker-input-multiple.demo.js.map
