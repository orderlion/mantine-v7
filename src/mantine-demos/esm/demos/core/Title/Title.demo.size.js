import React from 'react';
import { rem, Title } from '@mantine/core';

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="${rem(12)}">H1 heading with ${rem(12)} size</Title>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, { order: 3, size: "h1" }, "H3 heading with h1 font-size"), /* @__PURE__ */ React.createElement(Title, { size: "h4" }, "H1 heading with h4 font-size"), /* @__PURE__ */ React.createElement(Title, { size: rem(12) }, "H1 heading with ", rem(12), " size"));
}
const size = {
  type: "code",
  component: Demo,
  code
};

export { size };
//# sourceMappingURL=Title.demo.size.js.map
