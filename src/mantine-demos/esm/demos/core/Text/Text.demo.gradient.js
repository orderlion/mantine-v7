import React from 'react';
import { Text } from '@mantine/core';
import { gradientControls } from '../../../shared/gradient-controls.js';

const code = (props) => `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    Text,
    {
      size: "xl",
      fw: 900,
      variant: "gradient",
      gradient: { from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }
    },
    "Gradient Text"
  );
}
const gradient = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls
};

export { gradient };
//# sourceMappingURL=Text.demo.gradient.js.map
