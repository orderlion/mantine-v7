'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
`;
function Demo() {
  const icon = /* @__PURE__ */ React__default.createElement(iconsReact.IconAt, { style: { width: core.rem(16), height: core.rem(16) } });
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      leftSectionPointerEvents: "none",
      leftSection: icon,
      label: "Your email",
      placeholder: "Your email"
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      mt: "md",
      rightSectionPointerEvents: "none",
      rightSection: icon,
      label: "Your email",
      placeholder: "Your email"
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
//# sourceMappingURL=TextInput.demo.sections.js.map
