import React from 'react';
import { Text, Group, Button } from '@mantine/core';

const code = `
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" mb={5} fw={500}>
        Filled variant
      </Text>
      <Group>
        <Button color="cyan">Theme color</Button>
        <Button color="#1D72FE">Hex color</Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Light variant
      </Text>
      <Group>
        <Button variant="light" color="cyan">
          Theme color
        </Button>
        <Button variant="light" color="#1D72FE">
          Hex color
        </Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Outline variant
      </Text>
      <Group>
        <Button variant="outline" color="cyan">
          Theme color
        </Button>
        <Button variant="outline" color="#1D72FE">
          Hex color
        </Button>
      </Group>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { size: "sm", mb: 5, fw: 500 }, "Filled variant"), /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { color: "cyan" }, "Theme color"), /* @__PURE__ */ React.createElement(Button, { color: "#1D72FE" }, "Hex color")), /* @__PURE__ */ React.createElement(Text, { size: "sm", mb: 5, mt: "md", fw: 500 }, "Light variant"), /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { variant: "light", color: "cyan" }, "Theme color"), /* @__PURE__ */ React.createElement(Button, { variant: "light", color: "#1D72FE" }, "Hex color")), /* @__PURE__ */ React.createElement(Text, { size: "sm", mb: 5, mt: "md", fw: 500 }, "Outline variant"), /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { variant: "outline", color: "cyan" }, "Theme color"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", color: "#1D72FE" }, "Hex color")));
}
const colorProp = {
  type: "code",
  component: Demo,
  defaultExpanded: false,
  code
};

export { colorProp };
//# sourceMappingURL=Theming.demo.colorProp.js.map
