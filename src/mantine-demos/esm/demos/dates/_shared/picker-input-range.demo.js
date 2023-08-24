import React, { useState } from 'react';

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${name}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState([null, null]);
    return /* @__PURE__ */ React.createElement(
      Component,
      {
        type: "range",
        label: "Pick dates range",
        placeholder: "Pick dates range",
        value,
        onChange: setValue
      }
    );
  };
}
function getPickerInputRangeDemo(Component) {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerInputRangeDemo };
//# sourceMappingURL=picker-input-range.demo.js.map
