import React from 'react';
import { Title, Text } from '@mantine/core';

const code = `
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Title, { order: 3 }, "Title in which you want to", " ", /* @__PURE__ */ React.createElement(Text, { span: true, c: "blue", inherit: true }, "highlight"), " ", "something");
}
const inherit = {
  type: "code",
  component: Demo,
  code
};

export { inherit };
//# sourceMappingURL=Text.demo.inherit.js.map
