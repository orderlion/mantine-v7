'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text fz="${props.fontSize}" lh="${props.lineHeight}">
      Paras is an orange, insectoid Pok\xE9mon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
    </Text>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Text, { fz: props.fontSize, lh: props.lineHeight }, "Paras is an orange, insectoid Pok\xE9mon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils.");
}
const fontSizeConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: "size", prop: "fontSize", initialValue: "md", libraryValue: "__none__" },
    { type: "size", prop: "lineHeight", initialValue: "md", libraryValue: "__none__" }
  ]
};

exports.fontSizeConfigurator = fontSizeConfigurator;
//# sourceMappingURL=Theming.demo.fontSizeConfigurator.js.map
