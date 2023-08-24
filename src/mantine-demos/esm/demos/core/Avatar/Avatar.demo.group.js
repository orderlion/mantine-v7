import React from 'react';
import { Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group spacing="sm">
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Avatar.Group, { spacing: "sm" }, /* @__PURE__ */ React.createElement(Avatar, { src: avatars[0], radius: "xl" }), /* @__PURE__ */ React.createElement(Avatar, { src: avatars[1], radius: "xl" }), /* @__PURE__ */ React.createElement(Avatar, { src: avatars[2], radius: "xl" }), /* @__PURE__ */ React.createElement(Avatar, { radius: "xl" }, "+5"));
}
const group = {
  type: "code",
  centered: true,
  code,
  component: Demo
};

export { group };
//# sourceMappingURL=Avatar.demo.group.js.map
