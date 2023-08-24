import React from 'react';
import { IconStar } from '@tabler/icons-react';
import { Group, Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Avatar, { src: avatars[0], alt: "it's me" }), /* @__PURE__ */ React.createElement(Avatar, { radius: "xl" }), /* @__PURE__ */ React.createElement(Avatar, { color: "cyan", radius: "xl" }, "MK"), /* @__PURE__ */ React.createElement(Avatar, { color: "blue", radius: "sm" }, /* @__PURE__ */ React.createElement(IconStar, { size: "1.5rem" })));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Avatar.demo.usage.js.map
