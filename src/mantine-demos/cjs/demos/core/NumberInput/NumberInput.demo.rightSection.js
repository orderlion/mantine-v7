'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.NumberInput, { label: "Hide controls", placeholder: "Hide controls", hideControls: true }), /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "Custom right section",
      placeholder: "Custom right section",
      mt: "md",
      rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChartBubble, null),
      rightSectionPointerEvents: "none"
    }
  ));
}
const rightSection = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.rightSection = rightSection;
//# sourceMappingURL=NumberInput.demo.rightSection.js.map
