import React from 'react';
import { Anchor, Breadcrumbs } from '@mantine/core';

const code = `
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="\u2192" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`;
const items = [
  { title: "Mantine", href: "https://mantine.dev" },
  { title: "Mantine hooks", href: "#" },
  { title: "use-id", href: "#" }
].map((item, index) => /* @__PURE__ */ React.createElement(Anchor, { href: item.href, key: index }, item.title));
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumbs, null, items), /* @__PURE__ */ React.createElement(Breadcrumbs, { separator: "\u2192", mt: "xs", classNames: { separator: "mantine-rotate-rtl" } }, items));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Breadcrumbs.demo.usage.js.map
