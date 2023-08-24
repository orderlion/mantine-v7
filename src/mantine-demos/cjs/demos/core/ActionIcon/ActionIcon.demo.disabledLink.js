'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.ActionIcon,
    {
      component: "a",
      href: "https://mantine.dev",
      "data-disabled": true,
      size: "xl",
      "aria-label": "Open in a new tab",
      onClick: (event) => event.preventDefault()
    },
    /* @__PURE__ */ React__default.createElement(iconsReact.IconExternalLink, null)
  );
}
const disabledLink = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.disabledLink = disabledLink;
//# sourceMappingURL=ActionIcon.demo.disabledLink.js.map
