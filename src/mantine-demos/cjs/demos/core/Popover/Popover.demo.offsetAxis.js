'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var floatingPositionData = require('../../../shared/floating-position-data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="${props.position}"
      opened
      offset={{ mainAxis: ${props.mainAxis}, crossAxis: ${props.crossAxis} }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.Popover,
    {
      width: 200,
      position: props.position,
      opened: true,
      offset: { mainAxis: props.mainAxis, crossAxis: props.crossAxis }
    },
    /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Popover target")),
    /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "xs" }, "Change position and offset to configure dropdown offset relative to target"))
  );
}
const offsetAxis = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "select",
      prop: "position",
      initialValue: "bottom",
      data: floatingPositionData.FLOATING_POSITION_DATA,
      libraryValue: null
    },
    { type: "number", prop: "mainAxis", initialValue: 0, libraryValue: null, min: -50, max: 50 },
    { type: "number", prop: "crossAxis", initialValue: 0, libraryValue: null, min: -50, max: 50 }
  ]
};

exports.offsetAxis = offsetAxis;
//# sourceMappingURL=Popover.demo.offsetAxis.js.map
