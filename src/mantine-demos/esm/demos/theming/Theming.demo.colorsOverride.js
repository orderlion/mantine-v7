import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
import { Group, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { color: "ocean-blue" }, "Ocean blue button"), /* @__PURE__ */ React.createElement(Button, { color: "bright-pink", variant: "filled" }, "Bright pink button"));
}
const colorsOverride = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { colorsOverride };
//# sourceMappingURL=Theming.demo.colorsOverride.js.map
