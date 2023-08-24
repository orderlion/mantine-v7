import React, { useState } from 'react';

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return <${name} type="multiple" value={value} onChange={setValue} />;
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState([]);
    return /* @__PURE__ */ React.createElement(Component, { type: "multiple", value, onChange: setValue });
  };
}
function getPickerMultipleDemo(Component) {
  return {
    type: "code",
    centered: true,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerMultipleDemo };
//# sourceMappingURL=picker-multiple.demo.js.map
