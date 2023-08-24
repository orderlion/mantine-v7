import React from 'react';
import { Pill, InputBase } from '@mantine/core';

const code = `
import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
`;
function Demo() {
  const pills = Array(10).fill(0).map((_, index) => /* @__PURE__ */ React.createElement(Pill, { key: index, withRemoveButton: true }, "Item ", index));
  return /* @__PURE__ */ React.createElement(InputBase, { component: "div", multiline: true }, /* @__PURE__ */ React.createElement(Pill.Group, null, pills));
}
const withinInput = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { withinInput };
//# sourceMappingURL=Pill.demo.withinInput.js.map
