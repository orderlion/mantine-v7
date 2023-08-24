import React from 'react';
import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

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
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { leftSection: /* @__PURE__ */ React.createElement(IconPhoto, { size: 14 }), variant: "default" }, "Gallery"), /* @__PURE__ */ React.createElement(Button, { rightSection: /* @__PURE__ */ React.createElement(IconDownload, { size: 14 }) }, "Download"), /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "light",
      leftSection: /* @__PURE__ */ React.createElement(IconPhoto, { size: 14 }),
      rightSection: /* @__PURE__ */ React.createElement(IconArrowRight, { size: 14, className: "mantine-rotate-rtl" })
    },
    "Visit gallery"
  ));
}
const sections = {
  type: "code",
  component: Demo,
  code
};

export { sections };
//# sourceMappingURL=Button.demo.sections.js.map
