'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xE9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xE9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Text, null, "Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xE9mon was hunted close to extinction by those who were after the priceless antlers.", " ", /* @__PURE__ */ React__default.createElement(core.Popover, { middlewares: { flip: true, shift: true, inline: true }, position: "top" }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(core.Mark, null, "When visiting a junkyard")), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, null, "Inline dropdown")), ", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xE9mon is said to live at the foot of a rainbow.");
}
const inline = {
  type: "code",
  component: Demo,
  code
};

exports.inline = inline;
//# sourceMappingURL=Popover.demo.inline.js.map
