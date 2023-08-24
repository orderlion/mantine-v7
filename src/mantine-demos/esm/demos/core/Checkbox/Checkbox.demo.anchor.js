import React from 'react';
import { Checkbox, Anchor } from '@mantine/core';

const code = `
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Checkbox,
    {
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, "I accept", " ", /* @__PURE__ */ React.createElement(Anchor, { href: "https://mantine.dev", target: "_blank", inherit: true }, "terms and conditions"))
    }
  );
}
const anchor = {
  type: "code",
  component: Demo,
  code
};

export { anchor };
//# sourceMappingURL=Checkbox.demo.anchor.js.map
