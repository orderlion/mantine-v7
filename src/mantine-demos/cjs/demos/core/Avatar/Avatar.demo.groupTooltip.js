'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _mockdata = require('./_mockdata.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(core.Tooltip.Group, { openDelay: 300, closeDelay: 100 }, /* @__PURE__ */ React__default.createElement(core.Avatar.Group, { spacing: "sm" }, /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Salazar Troop", withArrow: true }, /* @__PURE__ */ React__default.createElement(core.Avatar, { src: _mockdata.avatars[0], radius: "xl" })), /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Bandit Crimes", withArrow: true }, /* @__PURE__ */ React__default.createElement(core.Avatar, { src: _mockdata.avatars[1], radius: "xl" })), /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Jane Rata", withArrow: true }, /* @__PURE__ */ React__default.createElement(core.Avatar, { src: _mockdata.avatars[2], radius: "xl" })), /* @__PURE__ */ React__default.createElement(
    core.Tooltip,
    {
      withArrow: true,
      label: /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", null, "John Outcast"), /* @__PURE__ */ React__default.createElement("div", null, "Levi Capitan"))
    },
    /* @__PURE__ */ React__default.createElement(core.Avatar, { radius: "xl" }, "+2")
  )));
}
const groupTooltip = {
  type: "code",
  centered: true,
  code,
  component: Demo
};

exports.groupTooltip = groupTooltip;
//# sourceMappingURL=Avatar.demo.groupTooltip.js.map
