'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, rem } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={
            <IconPhoto
              style={{ color: 'var(--mantine-color-red-filled', width: rem(20), height: rem(20) }}
            />
          }
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={
            <IconPrinter
              style={{ color: 'var(--mantine-color-blue-filled', width: rem(20), height: rem(20) }}
            />
          }
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={
            <IconCameraSelfie
              style={{ color: 'var(--mantine-color-teal-filled)', width: rem(20), height: rem(20) }}
            />
          }
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Accordion, { variant: "contained" }, /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { value: "photos" }, /* @__PURE__ */ React__default.createElement(
    core.Accordion.Control,
    {
      icon: /* @__PURE__ */ React__default.createElement(
        iconsReact.IconPhoto,
        {
          style: { color: "var(--mantine-color-red-filled", width: core.rem(20), height: core.rem(20) }
        }
      )
    },
    "Recent photos"
  ), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Content")), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { value: "print" }, /* @__PURE__ */ React__default.createElement(
    core.Accordion.Control,
    {
      icon: /* @__PURE__ */ React__default.createElement(
        iconsReact.IconPrinter,
        {
          style: { color: "var(--mantine-color-blue-filled", width: core.rem(20), height: core.rem(20) }
        }
      )
    },
    "Print photos"
  ), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Content")), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { value: "camera" }, /* @__PURE__ */ React__default.createElement(
    core.Accordion.Control,
    {
      icon: /* @__PURE__ */ React__default.createElement(
        iconsReact.IconCameraSelfie,
        {
          style: { color: "var(--mantine-color-teal-filled)", width: core.rem(20), height: core.rem(20) }
        }
      )
    },
    "Camera settings"
  ), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Content")));
}
const icons = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 400,
  centered: true
};

exports.icons = icons;
//# sourceMappingURL=Accordion.demo.icons.js.map
