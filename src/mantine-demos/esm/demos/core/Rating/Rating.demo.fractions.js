import React from 'react';
import { Stack, Group, Rating } from '@mantine/core';

const code = `
import { Rating, Group, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Group>
        <div>Fractions: 2</div>
        <Rating fractions={2} defaultValue={1.5} />
      </Group>
      <Group>
        <div>Fractions: 3</div>
        <Rating fractions={3} defaultValue={2.33333333} />
      </Group>
      <Group>
        <div>Fractions: 4</div>
        <Rating fractions={4} defaultValue={3.75} />
      </Group>
    </Stack>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stack, null, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement("div", null, "Fractions: 2"), /* @__PURE__ */ React.createElement(Rating, { fractions: 2, defaultValue: 1.5 })), /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement("div", null, "Fractions: 3"), /* @__PURE__ */ React.createElement(Rating, { fractions: 3, defaultValue: 2.33333333 })), /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement("div", null, "Fractions: 4"), /* @__PURE__ */ React.createElement(Rating, { fractions: 4, defaultValue: 3.75 })));
}
const fractions = {
  type: "code",
  component: Demo,
  code
};

export { fractions };
//# sourceMappingURL=Rating.demo.fractions.js.map
