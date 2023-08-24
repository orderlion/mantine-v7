import React from 'react';
import { Tooltip, Avatar } from '@mantine/core';
import { avatars } from './_mockdata.js';

const code = `
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tooltip.Group, { openDelay: 300, closeDelay: 100 }, /* @__PURE__ */ React.createElement(Avatar.Group, { spacing: "sm" }, /* @__PURE__ */ React.createElement(Tooltip, { label: "Salazar Troop", withArrow: true }, /* @__PURE__ */ React.createElement(Avatar, { src: avatars[0], radius: "xl" })), /* @__PURE__ */ React.createElement(Tooltip, { label: "Bandit Crimes", withArrow: true }, /* @__PURE__ */ React.createElement(Avatar, { src: avatars[1], radius: "xl" })), /* @__PURE__ */ React.createElement(Tooltip, { label: "Jane Rata", withArrow: true }, /* @__PURE__ */ React.createElement(Avatar, { src: avatars[2], radius: "xl" })), /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      withArrow: true,
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "John Outcast"), /* @__PURE__ */ React.createElement("div", null, "Levi Capitan"))
    },
    /* @__PURE__ */ React.createElement(Avatar, { radius: "xl" }, "+2")
  )));
}
const groupTooltip = {
  type: "code",
  centered: true,
  code,
  component: Demo
};

export { groupTooltip };
//# sourceMappingURL=Avatar.demo.groupTooltip.js.map
