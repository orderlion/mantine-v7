import React from 'react';
import { Indicator, Avatar } from '@mantine/core';

const code = `
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar size="lg" radius="xl" src="./avatar.png" />
    </Indicator>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Indicator, { inline: true, size: 16, offset: 7, position: "bottom-end", color: "red", withBorder: true }, /* @__PURE__ */ React.createElement(
    Avatar,
    {
      size: "lg",
      radius: "xl",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    }
  ));
}
const offset = {
  type: "code",
  component: Demo,
  code
};

export { offset };
//# sourceMappingURL=Indicator.demo.offset.js.map
