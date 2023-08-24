'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useProps, MantineThemeProvider, createTheme } from '@mantine/core';

interface CustomComponentProps {
  color?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<CustomComponentProps> = {
  color: 'red',
};

function CustomComponent(props: CustomComponentProps) {
  const { color, children } = useProps('CustomComponent', defaultProps, props);
  return <div style={{ color }}>{children}</div>;
}

const theme = createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: 'green',
      },
    },
  },
});

function Demo() {
  return (
    <div>
      <CustomComponent>Default color</CustomComponent>

      <MantineThemeProvider theme={theme}>
        <CustomComponent>Provider color</CustomComponent>
        <CustomComponent color="blue">Prop color</CustomComponent>
      </MantineThemeProvider>
    </div>
  );
}
`;
const defaultProps = {
  color: "red"
};
function CustomComponent(props) {
  const { color, children } = core.useProps("CustomComponent", defaultProps, props);
  return /* @__PURE__ */ React__default.createElement("div", { style: { color } }, children);
}
const theme = core.createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: "green"
      }
    }
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(CustomComponent, null, "Default color"), /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(CustomComponent, null, "Provider color"), /* @__PURE__ */ React__default.createElement(CustomComponent, { color: "blue" }, "Prop color")));
}
const usePropsHook = {
  type: "code",
  component: Demo,
  code
};

exports.usePropsHook = usePropsHook;
//# sourceMappingURL=Theming.demo.usePropsHook.js.map
