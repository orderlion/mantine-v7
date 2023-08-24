'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Center, SegmentedControl, Box, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Export</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.SegmentedControl,
    {
      data: [
        {
          value: "preview",
          label: /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(iconsReact.IconEye, { style: { width: core.rem(16), height: core.rem(16) } }), /* @__PURE__ */ React__default.createElement(core.Box, { ml: 10 }, "Preview"))
        },
        {
          value: "code",
          label: /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(iconsReact.IconCode, { style: { width: core.rem(16), height: core.rem(16) } }), /* @__PURE__ */ React__default.createElement(core.Box, { ml: 10 }, "Code"))
        },
        {
          value: "export",
          label: /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(iconsReact.IconExternalLink, { style: { width: core.rem(16), height: core.rem(16) } }), /* @__PURE__ */ React__default.createElement(core.Box, { ml: 10 }, "Export"))
        }
      ]
    }
  );
}
const labels = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.labels = labels;
//# sourceMappingURL=SegmentedControl.demo.labels.js.map
