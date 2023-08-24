import React from 'react';
import { Text, Button } from '@mantine/core';

const code = (props) => `
import { Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="blue.${props.index}">Text with blue.${props.index} color</Text>
      <Button color="cyan.${props.index}">Button</Button>
    </>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { c: `blue.${props.index}` }, "Text with blue.", props.index, " color"), /* @__PURE__ */ React.createElement(Button, { color: `cyan.${props.index}`, mt: "sm" }, "Button"));
}
const colorsIndexConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { type: "number", prop: "index", initialValue: 6, libraryValue: "__none__", min: 0, max: 9 }
  ]
};

export { colorsIndexConfigurator };
//# sourceMappingURL=Theming.demo.colorsIndexConfigurator.js.map
