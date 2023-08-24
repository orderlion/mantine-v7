import React from 'react';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';
import { SegmentedControl, Center, rem, Box } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(
    SegmentedControl,
    {
      data: [
        {
          value: "preview",
          label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(IconEye, { style: { width: rem(16), height: rem(16) } }), /* @__PURE__ */ React.createElement(Box, { ml: 10 }, "Preview"))
        },
        {
          value: "code",
          label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(IconCode, { style: { width: rem(16), height: rem(16) } }), /* @__PURE__ */ React.createElement(Box, { ml: 10 }, "Code"))
        },
        {
          value: "export",
          label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(IconExternalLink, { style: { width: rem(16), height: rem(16) } }), /* @__PURE__ */ React.createElement(Box, { ml: 10 }, "Export"))
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

export { labels };
//# sourceMappingURL=SegmentedControl.demo.labels.js.map
