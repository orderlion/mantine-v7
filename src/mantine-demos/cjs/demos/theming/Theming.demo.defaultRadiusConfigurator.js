'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { MantineProvider, TextInput, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ defaultRadius: '${props.defaultRadius}' }}>
      <Button fullWidth>Button with defaultRadius</Button>
      <TextInput mt="sm" label="TextInput with defaultRadius" placeholder="TextInput with default radius" />
    </MantineProvider>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Button, { radius: props.defaultRadius, fullWidth: true }, "Button with defaultRadius"), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      mt: "sm",
      radius: props.defaultRadius,
      label: "TextInput with defaultRadius",
      placeholder: "TextInput with default radius"
    }
  ));
}
const defaultRadiusConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [{ type: "size", prop: "defaultRadius", initialValue: "sm", libraryValue: "__none__" }]
};

exports.defaultRadiusConfigurator = defaultRadiusConfigurator;
//# sourceMappingURL=Theming.demo.defaultRadiusConfigurator.js.map
