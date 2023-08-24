'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, { size: 14 }), variant: "default" }, "Gallery"), /* @__PURE__ */ React__default.createElement(core.Button, { rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconDownload, { size: 14 }) }, "Download"), /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      variant: "light",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, { size: 14 }),
      rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowRight, { size: 14, className: "mantine-rotate-rtl" })
    },
    "Visit gallery"
  ));
}
const sections = {
  type: "code",
  component: Demo,
  code
};

exports.sections = sections;
//# sourceMappingURL=Button.demo.sections.js.map
