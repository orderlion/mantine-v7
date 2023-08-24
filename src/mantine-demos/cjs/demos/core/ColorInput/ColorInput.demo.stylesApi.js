'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var stylesApi$1 = require('@mantine/styles-api');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ColorInput, rem } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.ColorInput,
    {
      label: "Label",
      placeholder: "ColorInput",
      description: "Description",
      error: "Error",
      withAsterisk: true,
      swatches: ["#000", "#fff", "#f00", "#0f0", "#00f"],
      format: "rgba",
      classNames: props.classNames
    }
  );
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.ColorInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=ColorInput.demo.stylesApi.js.map
