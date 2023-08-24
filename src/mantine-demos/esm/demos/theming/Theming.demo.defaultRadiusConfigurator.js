import React from 'react';
import { Button, TextInput } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { radius: props.defaultRadius, fullWidth: true }, "Button with defaultRadius"), /* @__PURE__ */ React.createElement(
    TextInput,
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

export { defaultRadiusConfigurator };
//# sourceMappingURL=Theming.demo.defaultRadiusConfigurator.js.map
