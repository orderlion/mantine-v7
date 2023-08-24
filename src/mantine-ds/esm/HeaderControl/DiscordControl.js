import React from 'react';
import { HeaderControl } from './HeaderControl.js';
import { meta } from '../meta.js';
import classes from './DiscordControl.module.css.js';
import { DiscordIcon } from '../Icons/DiscordIcon.js';

function DiscordControl() {
  return /* @__PURE__ */ React.createElement(
    HeaderControl,
    {
      tooltip: "Discord",
      component: "a",
      href: meta.discordLink,
      className: classes.discord
    },
    /* @__PURE__ */ React.createElement(DiscordIcon, { size: 20 })
  );
}

export { DiscordControl };
//# sourceMappingURL=DiscordControl.js.map
