import React, { useState, useEffect } from 'react';
import { useMantineColorScheme, MantineProvider, Group, Button } from '@mantine/core';

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
  const [attr, setAttr] = useState(void 0);
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    setAttr(colorScheme);
  }, [colorScheme]);
  return /* @__PURE__ */ React.createElement("div", { id: "primary-color-demo-root", "data-mantine-color-scheme": attr }, /* @__PURE__ */ React.createElement(
    MantineProvider,
    {
      cssVariablesSelector: "#primary-color-demo-root",
      getRootElement: () => document.createElement("div"),
      theme: { primaryShade: props.primaryShade }
    },
    /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, null, "Filled"), /* @__PURE__ */ React.createElement(Button, { variant: "light" }, "Light"), /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Outline"))
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

export { primaryShadeConfigurator };
//# sourceMappingURL=Theming.demo.primaryShadeConfigurator.js.map
