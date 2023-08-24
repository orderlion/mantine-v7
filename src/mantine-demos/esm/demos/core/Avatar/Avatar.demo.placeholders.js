import React from 'react';
import { IconStar } from '@tabler/icons-react';
import { Group, Avatar } from '@mantine/core';

const code = `
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Avatar, { src: null, alt: "no image here" }), /* @__PURE__ */ React.createElement(Avatar, { src: null, alt: "no image here", color: "indigo" }), /* @__PURE__ */ React.createElement(Avatar, { src: null, alt: "no image here", color: "red" }, "VR"), /* @__PURE__ */ React.createElement(Avatar, { color: "blue", radius: "xl" }, /* @__PURE__ */ React.createElement(IconStar, { size: "1.5rem" })));
}
const placeholders = {
  type: "code",
  code,
  component: Demo
};

export { placeholders };
//# sourceMappingURL=Avatar.demo.placeholders.js.map
