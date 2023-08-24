'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var floatingPositionData = require('../../../shared/floating-position-data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${props.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${props.mainAxis}, crossAxis: ${props.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.Tooltip,
    {
      position: props.position,
      opened: true,
      label: "Tooltip",
      offset: { mainAxis: props.mainAxis, crossAxis: props.crossAxis }
    },
    /* @__PURE__ */ React__default.createElement(core.Button, null, "Button with tooltip")
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
      initialValue: "top",
      data: floatingPositionData.FLOATING_POSITION_DATA,
      libraryValue: null
    },
    { type: "number", prop: "mainAxis", initialValue: 5, libraryValue: null, min: -50, max: 50 },
    { type: "number", prop: "crossAxis", initialValue: 0, libraryValue: null, min: -50, max: 50 }
  ]
};

exports.offsetAxis = offsetAxis;
//# sourceMappingURL=Tooltip.demo.offsetAxis.js.map
