import React, { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

const code = `
import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
`;
function Demo() {
  const [checked, setChecked] = useState(true);
  return /* @__PURE__ */ React.createElement(
    ColorSwatch,
    {
      component: "button",
      color: "var(--mantine-color-grape-6)",
      onClick: () => setChecked((c) => !c),
      c: "white",
      style: { cursor: "pointer" }
    },
    checked && /* @__PURE__ */ React.createElement(CheckIcon, { style: { width: rem(12), height: rem(12) } })
  );
}
const component = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { component };
//# sourceMappingURL=ColorSwatch.demo.component.js.map
