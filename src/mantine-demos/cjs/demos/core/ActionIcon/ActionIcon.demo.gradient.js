'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var gradientControls = require('../../../shared/gradient-controls.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.ActionIcon,
    {
      variant: "gradient",
      size: "xl",
      "aria-label": "Gradient action icon",
      gradient: { from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }
    },
    /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, null)
  );
}
const gradient = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls.gradientControls
};

exports.gradient = gradient;
//# sourceMappingURL=ActionIcon.demo.gradient.js.map
