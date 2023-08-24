import React from 'react';
import { NativeSelect, rem } from '@mantine/core';
import { IconHash, IconChevronDown } from '@tabler/icons-react';

const code = `
import { NativeSelect, rem } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    NativeSelect,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconHash, { style: { width: rem(16), height: rem(16) } }),
      leftSectionPointerEvents: "none",
      label: "Left section",
      data: ["React", "Angular"]
    }
  ), /* @__PURE__ */ React.createElement(
    NativeSelect,
    {
      rightSection: /* @__PURE__ */ React.createElement(IconChevronDown, { style: { width: rem(16), height: rem(16) } }),
      label: "Right section",
      data: ["React", "Angular"],
      mt: "md"
    }
  ));
}
const sections = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { sections };
//# sourceMappingURL=NativeSelect.demo.sections.js.map
