'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = (props) => `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props.primaryShade} }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </MantineProvider>
  );
}
`;
function Wrapper(props) {
  const [attr, setAttr] = React.useState(void 0);
  const { colorScheme } = core.useMantineColorScheme();
  React.useEffect(() => {
    setAttr(colorScheme);
  }, [colorScheme]);
  return /* @__PURE__ */ React__default.createElement("div", { id: "primary-color-demo-root", "data-mantine-color-scheme": attr }, /* @__PURE__ */ React__default.createElement(
    core.MantineProvider,
    {
      cssVariablesSelector: "#primary-color-demo-root",
      getRootElement: () => document.createElement("div"),
      theme: { primaryShade: props.primaryShade }
    },
    /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Filled"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "light" }, "Light"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline" }, "Outline"))
  ));
}
const primaryShadeConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "number",
      prop: "primaryShade",
      initialValue: 6,
      libraryValue: "__none__",
      min: 0,
      max: 9
    }
  ]
};

exports.primaryShadeConfigurator = primaryShadeConfigurator;
//# sourceMappingURL=Theming.demo.primaryShadeConfigurator.js.map
