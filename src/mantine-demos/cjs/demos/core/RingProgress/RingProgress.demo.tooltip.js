'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents \u2013 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps \u2013 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other \u2013 15 Gb' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.RingProgress,
    {
      size: 170,
      thickness: 16,
      label: /* @__PURE__ */ React__default.createElement(core.Text, { size: "xs", ta: "center", px: "xs", style: { pointerEvents: "none" } }, "Hover sections to see tooltips"),
      sections: [
        { value: 40, color: "cyan", tooltip: "Documents \u2013 40 Gb" },
        { value: 25, color: "orange", tooltip: "Apps \u2013 25 Gb" },
        { value: 15, color: "grape", tooltip: "Other \u2013 15 Gb" }
      ]
    }
  );
}
const tooltip = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.tooltip = tooltip;
//# sourceMappingURL=RingProgress.demo.tooltip.js.map
