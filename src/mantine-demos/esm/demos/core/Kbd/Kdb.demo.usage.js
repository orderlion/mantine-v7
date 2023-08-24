import React from 'react';
import { Kbd } from '@mantine/core';

const code = `
import { Kbd } from '@mantine/core';

function Demo() {
  return (
    <>
      <Kbd>\u2318</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Kbd, null, "\u2318"), " + ", /* @__PURE__ */ React.createElement(Kbd, null, "Shift"), " + ", /* @__PURE__ */ React.createElement(Kbd, null, "M"));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Kdb.demo.usage.js.map
