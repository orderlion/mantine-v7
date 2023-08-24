'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Anchor, { href: "https://mantine.dev", target: "_blank" }, /* @__PURE__ */ React__default.createElement(core.Center, { inline: true }, /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowLeft, { style: { width: core.rem(12), height: core.rem(12) }, className: "mantine-rotate-rtl" }), /* @__PURE__ */ React__default.createElement(core.Box, { ml: 5 }, "Back to Mantine website")));
}
const inline = {
  type: "code",
  code,
  component: Demo
};

exports.inline = inline;
//# sourceMappingURL=Center.demo.inline.js.map
