import React from 'react';
import { createTheme, MantineThemeProvider, useProps } from '@mantine/core';

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
  const { color, children } = useProps("CustomComponent", defaultProps, props);
  return /* @__PURE__ */ React.createElement("div", { style: { color } }, children);
}
const theme = createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: "green"
      }
    }
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CustomComponent, null, "Default color"), /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(CustomComponent, null, "Provider color"), /* @__PURE__ */ React.createElement(CustomComponent, { color: "blue" }, "Prop color")));
}
const usePropsHook = {
  type: "code",
  component: Demo,
  code
};

export { usePropsHook };
//# sourceMappingURL=Theming.demo.usePropsHook.js.map
