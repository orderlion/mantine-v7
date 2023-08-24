import React from 'react';
import { Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Avatar,
    {
      component: "a",
      href: "https://github.com/rtivital",
      target: "_blank",
      src: avatars[0],
      alt: "it's me"
    }
  );
}
const link = {
  type: "code",
  centered: true,
  code,
  component: Demo
};

export { link };
//# sourceMappingURL=Avatar.demo.link.js.map
