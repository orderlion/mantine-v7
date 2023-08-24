import React from 'react';
import { Title } from '@mantine/core';

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, { order: 1 }, "This is h1 title"), /* @__PURE__ */ React.createElement(Title, { order: 2 }, "This is h2 title"), /* @__PURE__ */ React.createElement(Title, { order: 3 }, "This is h3 title"), /* @__PURE__ */ React.createElement(Title, { order: 4 }, "This is h4 title"), /* @__PURE__ */ React.createElement(Title, { order: 5 }, "This is h5 title"), /* @__PURE__ */ React.createElement(Title, { order: 6 }, "This is h6 title"));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Title.demo.usage.js.map
