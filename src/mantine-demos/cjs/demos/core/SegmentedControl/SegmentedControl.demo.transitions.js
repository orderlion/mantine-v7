'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", fw: 500, mt: 3 }, "No transitions"), /* @__PURE__ */ React__default.createElement(core.SegmentedControl, { data: ["React", "Angular", "Vue", "Svelte"], transitionDuration: 0 }), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", fw: 500, mt: "md" }, "500ms linear transition"), /* @__PURE__ */ React__default.createElement(
    core.SegmentedControl,
    {
      data: ["React", "Angular", "Vue", "Svelte"],
      transitionDuration: 500,
      transitionTimingFunction: "linear"
    }
  ));
}
const transitions = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.transitions = transitions;
//# sourceMappingURL=SegmentedControl.demo.transitions.js.map
