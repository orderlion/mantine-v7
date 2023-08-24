import React, { useState } from 'react';
import { Text } from '@mantine/core';

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${name} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState([null, null]);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Component,
      {
        type: "range",
        numberOfColumns: 2,
        value,
        onChange: setValue,
        visibleFrom: "sm"
      }
    ), /* @__PURE__ */ React.createElement(Text, { ta: "center", hiddenFrom: "sm" }, "Demo is not available on small screens. Make your screen larger to see the demo."));
  };
}
function getPickerNumberOfColumnsDemo(Component) {
  return {
    type: "code",
    centered: true,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerNumberOfColumnsDemo };
//# sourceMappingURL=picker-numberOfColumns.demo.js.map
