'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.NativeSelect,
    {
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconHash, { style: { width: core.rem(16), height: core.rem(16) } }),
      leftSectionPointerEvents: "none",
      label: "Left section",
      data: ["React", "Angular"]
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.NativeSelect,
    {
      rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronDown, { style: { width: core.rem(16), height: core.rem(16) } }),
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

exports.sections = sections;
//# sourceMappingURL=NativeSelect.demo.sections.js.map
